import React, {useEffect} from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { Layout, Spinner } from "@ui-kitten/components";
function AuthLoadingScreen () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Spinner />
        <StatusBar barStyle="default" />
      </Layout>
    </SafeAreaView>
  );
};

export default AuthLoadingScreen;
