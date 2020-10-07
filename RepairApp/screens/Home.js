import React from "react";
import { SafeAreaView } from "react-native";
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
} from "@ui-kitten/components";

class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    const navigateDetails = () => {
      navigation.navigate("Detail");
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout  style={{ flex: 1 ,justifyContent: "center", alignItems: "center"}}>
          <Text>Home</Text>
          <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        </Layout>
      </SafeAreaView>
    );
  }
}
export default Home;
