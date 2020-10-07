import React from "react";
import { SafeAreaView } from "react-native";
import {
  ApplicationProvider,
  Divider,
  Layout,
  Button,
  Text,
} from "@ui-kitten/components";
class Profile extends React.Component {
  render() {
    const { navigation } = this.props;
    const navigateProfile = () => {
      navigation.navigate("Login");
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Profile</Text>
          <Button onPress={navigateProfile}>LOGOUT</Button>
        </Layout>
      </SafeAreaView>
    );
  }
}
export default Profile;
