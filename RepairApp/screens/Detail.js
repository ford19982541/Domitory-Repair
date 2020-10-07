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

// const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// const navigateBack = () => {
//   navigation.goBack();
// };

// const BackAction = () => (
//   <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
// );
export default class Detail extends React.Component {
  render() {
    // const { navigation } = this.props;
    // const navigateBack = () => {
    //   navigation.goBack();
    // };
  
    
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
}
