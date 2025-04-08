import styles from "./header.styles";
import { Image, View } from "react-native";
type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/text-logo.png')} />
        </View>)
};