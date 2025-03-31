import Transaction from "../transaction/tx";
import s from "./tx-date-block.module.css"
import { ApiResponse } from "../transaction-grid/tx-grid";

type DateBlockProps = {
    date: string;
    transactions: ApiResponse[];
};

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year:"numeric" });
}

export default function TransactionDateBlock({ date, transactions }: DateBlockProps) {
    console.log(transactions)
    return (
        <div className={s.container}>
            <div className={s.date}>{formatDate(date)}</div>
            <div className={s.grid}>
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} delta={transaction.delta} rawAmount={transaction.raw_amount} location={transaction.description} />
                ))}
            </div>

        </div>

    );
}