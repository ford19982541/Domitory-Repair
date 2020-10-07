import React from "react";
import { StatusBar, SafeAreaView } from 'react-native';
import { Layout, Button, Text } from "@ui-kitten/components";
class Login extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <Layout  style={{ flex: 1 ,justifyContent: "center", alignItems: "center"}}>
        <StatusBar barStyle="light-content" /> 
          <Text>Login</Text>
          <Button onPress={() => navigation.navigate("App")}>Login</Button>
        </Layout>
        </SafeAreaView>
    );
  }
}
export default Login;
