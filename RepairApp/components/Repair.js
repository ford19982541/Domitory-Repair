import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Layout, Text, Card } from "@ui-kitten/components";
import { BASE_URL } from "../config";

export function Repair({ repair, onPress }) {
  const Status = ({ props }) =>
  repair.status == 1
      ? "info"
      : repair.status == 2
      ? "warning"
      : repair.status == 3
      ? "success"
      : "danger";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card
        style={styles.card}
        onPress={onPress}
        status={repair.status == 1
            ? "info"
            : repair.status == 2
            ? "basic"
            : repair.status == 3
            ? "warning"
            : repair.status == 4
            ? "success"
            : "danger"}
      >
        <Layout>
          <Text>
            {repair.status == 1
              ? "แจ้งซ่อม"
              : repair.status == 2
              ? "รอดำเนินการ"
              : repair.status == 3
              ? "ดำเนินการ"
              : repair.status == 4
              ? "เสร็จสิ้น"
              : "ยกเลิก"}
          </Text>
        </Layout>
      </Card>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
});
