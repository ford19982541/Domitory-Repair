import React, { useState } from "react";
import { StatusBar, SafeAreaView ,TouchableWithoutFeedback} from "react-native";
import { Layout, Button, Text, Input, Icon } from "@ui-kitten/components";
import { Loading } from "../components/loading";
import { AuthContext } from "../contexts/AuthContext";
import { Error } from "../components/Error";

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);
export function LoginScreen({ navigation }) {
  
  const { login } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState("fordzii");
  const [password, setPassword] = React.useState("NXX6fe9hem");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar barStyle="light-content" />
        <Text>Login</Text>
        <Error error={error} />
        <Input
          placeholder="Username"
          status="success"
          onChangeText={setUsername}
          value={username}
        />
        <Input
          placeholder="Password"
          status="success"
          accessoryRight={renderIcon}
          captionIcon={AlertIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={setPassword}
          value={password}
        />
        <Button
          onPress={async () => {
            const formData = new FormData();
            formData.append('username', username)
            formData.append('password', password)

            try {
              console.log(formData,'login')
              await login(formData);
            } catch (e) {
              setError(e.message);
              setLoading(false);
            }
          }}
        >
          Sign In
        </Button>
        <Loading loading={loading} />
        {/* <Button onPress={() => navigation.navigate("App")}>Login</Button> */}
      </Layout>
    </SafeAreaView>
  );
}

export default LoginScreen;
