import React, { useEffect, useState } from "react";
import TransactionGrid from "@/components/transaction-grid/tx-grid";
import styles from "./index.styles";
import Card from "@/components/card/card";
import LoadingScreen from "@/components/loading-screen/loading-screen";
import ErrorScreen from "@/components/error-screen/error-screen";
import Header from "@/components/header/header";
import { View } from "react-native";

interface sumDelta {
  sum_delta: number
}

export default function HomePage() {

  const [delta, setDelta] = useState<sumDelta>({ sum_delta: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <View style={styles.loadingOrErrorContainer}><LoadingScreen></LoadingScreen></View>;
  if (error) return <View style={styles.loadingOrErrorContainer}><ErrorScreen error={error}/></View>;

  return (
    <View style={styles.container}>
      <View ><Header title="rounder"></Header></View>
      <View>
        <Card title="You've saved" body={delta?.sum_delta} footer="In the last 30 days"></Card>
      </View>
      <View>
        <TransactionGrid></TransactionGrid>
      </View>

    </View>


  );
}
