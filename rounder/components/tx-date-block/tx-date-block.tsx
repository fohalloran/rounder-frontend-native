import Transaction from "../transaction/tx";
import styles from "./tx-date-block.styles";
import { ApiResponse } from "../transaction-grid/tx-grid";
import { View, Text } from "react-native";

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
        <View style={styles.container}>
            <Text style={styles.date}>{formatDate(date)}</Text>
            <View style={styles.grid}>
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} delta={transaction.delta} rawAmount={transaction.raw_amount} location={transaction.description} />
                ))}
            </View>
        </View>

    );
}