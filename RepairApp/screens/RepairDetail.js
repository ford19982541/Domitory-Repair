import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { useGet } from "../hooks/useGet";
export default function RepairDetail({ navigation, route }) {
  const repairId = route.params.id
  console.log("ID",repairId)
  const data = useGet(`/api/Repairs/${repairId}/`)
  console.log("detail",data)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
}
