import styles from "./tx.styles";
import { Text, View } from "react-native";

type TxProps = {
    rawAmount: number;
    delta: number;
    location: string;
};

export default function Transaction({ rawAmount, location, delta }: TxProps) {
    console.log(rawAmount)

    return (
        <View>
            <View style={styles.grid}>
                <Text style={styles.item}>{location}</Text>
                <Text style={styles.item}>£{rawAmount}</Text>
                <Text style={styles.delta}>£{delta}</Text>
            </View>
        </View>)
};