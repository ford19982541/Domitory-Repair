import React from "react";
import { SafeAreaView } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
} from "@ui-kitten/components";

export default ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('RepairDetail')}>OPEN DETAILS</Button>
    </Layout>
  </SafeAreaView>
);
