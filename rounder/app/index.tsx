import React, { useEffect, useState } from "react";
import TransactionGrid from "@/components/transaction-grid/tx-grid";
import s from "./index.module.css"
import Card from "@/components/card/card";
import Header from "@/components/header/header";

interface sumDelta {
  sum_delta: number
}

export default function HomePage() {

  const [delta, setDelta] = useState<sumDelta>({ sum_delta: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/transactions/totalSaved?account_code=56c7b029e0f8ec5a2334fb0ffc2fface")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch transactions from server");
        return response.json();
      })
      .then((data: sumDelta) => {
        setDelta(data);
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
      <div className={s.header}><Header title="rounder"></Header></div>
      <div className={s.totalContainer}>
        <Card title="You've saved" body={delta?.sum_delta} footer="In the last 30 days"></Card>
      </div>
      <div className={s.transactionContainer}>
        <TransactionGrid></TransactionGrid>
      </div>

    </div>


  );
}
