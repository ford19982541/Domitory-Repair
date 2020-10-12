import React from "react";
import { SafeAreaView } from "react-native";
import { Divider, Layout, Button, Text, Card } from "@ui-kitten/components";
import { AuthContext } from "../contexts/AuthContext";
import { useProfile } from "../hooks/useProfile";

function Profile({ navigation }) {
  const { logout } = React.useContext(AuthContext);
  const user = useProfile();
  console.log(user);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Card >
          <Layout >
            <Text >{user.first_name}</Text>
            <Text >{user.last_name}</Text>
            <Text >{user.email}</Text>
          </Layout>
          <Button
          onPress={() => {
            logout();
          }}
        >
          Sign Out
        </Button>
        </Card>
      </Layout>
    </SafeAreaView>
  );
}
export default Profile;
