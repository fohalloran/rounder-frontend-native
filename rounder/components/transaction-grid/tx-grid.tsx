import Transaction from "../transaction/tx";
import TransactionDateBlock from "../tx-date-block/tx-date-block";
import s from "./tx-grid.module.css"
import { useEffect, useState } from "react";

export interface ApiResponse {
    id: number
    account_code: string
    description: string
    raw_amount: number
    rounded_amount: number
    delta: number
    timestamp: string
}

type TransactionsByDate = Record<string, ApiResponse[]>

export default function TransactionGrid() {

    const [transactionsByDate, setTransactionsByDate] = useState<TransactionsByDate>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch("http://localhost:3001/api/transactions?account_code=56c7b029e0f8ec5a2334fb0ffc2fface&page=1") // Replace with actual API URL
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch transactions");
          return response.json();
        })
        .then((data: TransactionsByDate) => {
          setTransactionsByDate(data);
          console.log(data)
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Loading transactions...</p>;
    if (error) return <p>Error: {error}</p>;
  

    return (
        <div className={s.container}>
            <div className={s.grid}>
                {Object.entries(transactionsByDate).map(([date, transactions]) => (
                    <TransactionDateBlock key={date} date={date} transactions={transactions} />
                ))}
            </div>

        </div>

    );
}