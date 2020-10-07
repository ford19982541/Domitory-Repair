import React from "react";
import { StatusBar } from 'react-native';
import { Layout, Button, Text } from "@ui-kitten/components";
class Login extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
        <Layout styles ={{flex : 1}}>
        <StatusBar barStyle="light-content" /> 
          <Text>Login</Text>
          <Button onPress={() => navigation.navigate("App")}>Login</Button>
        </Layout>
    );
  }
}
export default Login;
