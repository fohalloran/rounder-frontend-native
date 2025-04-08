import styles from "./card.style";
import { View } from "react-native";
import { Text } from "react-native";

type TxProps = {
    title: string;
    body: string|number;
    footer: string;
};

export default function Card({ title, body, footer }: TxProps) {

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Text style={styles.footer}>{title}</Text>
                <Text style={styles.amount}>£{body}</Text>
                <Text style={styles.footer}>{footer}</Text>
            </View>
        </View>)
};