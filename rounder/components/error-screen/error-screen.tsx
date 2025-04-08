import s from "./error-screen.module.css"
import { Text, View } from "react-native";
type ErrorScreenProps = {
    error: Error;
};

export default function ErrorScreen({ error}: ErrorScreenProps) {

    

    return (
        <View className={s.container}>
            <Text>I'm so sorry there was an error</Text>
            <Text>{error.message}</Text>
        </View>)
};