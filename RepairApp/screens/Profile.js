import React from "react";
import { SafeAreaView } from "react-native";
import { Divider, Layout, Button, Text } from "@ui-kitten/components";
import { AuthContext } from "../contexts/AuthContext";

function Profile({ navigation }) {
  const { logout } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Profile</Text>
        <Button onPress={() => {
              logout();
            }}>
          Sign Out
        </Button>
      </Layout>
    </SafeAreaView>
  );
}
export default Profile;
