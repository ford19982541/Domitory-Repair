import React, {useEffect, useState} from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import RepairList from "../screens/RepairList";
import Profile from "../screens/Profile";
import Detail from "../screens/RepairDetail";
import LoginScreen from "../screens/Login";
// import AuthLoadingScreen from "../screens/Loading";
import AsyncStorage from "@react-native-community/async-storage";
const OptionIcon = (props) => <Icon {...props} name="options-2-outline" />;
const ToolIcon = (props) => (
  <Icon {...props} name="tools" pack="fontAwesome5" />
);

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="RepairList" component={RepairList} />
    <HomeStack.Screen
      name="Detail"
      component={Detail}
      options={{ title: "Detail" }}
    />
  </HomeStack.Navigator>
);

// const ProfileStack = createStackNavigator();
// const ProfileStackScreen = () => (
//   <ProfileStack.Navigator mode="card" headerMode="none">
//     <ProfileStack.Screen
//       name="Profile"
//       component={Profile}
//       options={{ title: "Profile" }}
//     />
//   </ProfileStack.Navigator>
// );

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HomE" icon={OptionIcon} />
    <BottomNavigationTab title="Profile" icon={ToolIcon} />
  </BottomNavigation>
);

const AppTab = createBottomTabNavigator();
const AppTabScreen = () => (
  <AppTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <AppTab.Screen name="Home" component={HomeStackScreen} />
    <AppTab.Screen name="Profile" component={Profile} />
  </AppTab.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <SafeAreaProvider>
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </SafeAreaProvider>
);
const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      detectLogin();
    }, 500);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      {  isloggedin ? (
        <RootStack.Screen name="AppTabScreen" component={AppTabScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};
export default () => {
  return <RootStackScreen />;
};
