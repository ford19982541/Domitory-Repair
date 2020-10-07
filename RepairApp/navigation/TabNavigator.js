import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from "@ui-kitten/components";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Detail from "../screens/Detail";
import Login from "../screens/Login";
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function HomeNavigator  () {
//   <Stack.Navigator headerMode='none'>
//     <Stack.Screen name='Home' component={Home}/>
//     <Stack.Screen name='Details' component={Detail}/>
//   </Stack.Navigator>
// }
function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail",
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          // cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}
export default function LoginStack(props) {
  return (
    <SafeAreaProvider>
      <Stack.Navigator mode="card" headerMode="none">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerTransparent: true }}
        />
        <Stack.Screen name="App" component={TabNavigator} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
const BottomTabBar = ({ navigation, state }) => (
  <React.Fragment>
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="HomE" />
      <BottomNavigationTab title="Profile" />
    </BottomNavigation>
  </React.Fragment>
);

function TabNavigator() {
  return (
    <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Profile" component={ProfileStack} />
    </BottomTab.Navigator>
  );
}

// const AppNavigator = () => <TabNavigator />;
