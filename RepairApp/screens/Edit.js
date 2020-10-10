import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TextInput, Alert, Platform, Image } from "react-native";
import ValidationComponent from 'react-native-form-validator';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import AsyncStorage from "@react-native-community/async-storage";

// const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// const navigateBack = () => {
//   navigation.goBack();
// };

// const BackAction = () => (
//   <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
// );
export default class Edit extends ValidationComponent {


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
          <Text category="h1">EDIT</Text>
        </Layout>
      </SafeAreaView>
    );
  }
}
