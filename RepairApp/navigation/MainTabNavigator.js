import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RepairStackNavigator } from "./RepairStackNavigator";
import Profile from "../screens/Profile";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

const OptionIcon = (props) => <Icon {...props} name="options-2-outline" />;
const ToolIcon = (props) => (
  <Icon {...props} name="tools" pack="fontAwesome5" />
);
const MainTab = createBottomTabNavigator();
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HomE" icon={OptionIcon} />
    <BottomNavigationTab title="Profile" icon={ToolIcon} />
  </BottomNavigation>
);
export function MainTabNavigator() {
  return (
    <MainTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <MainTab.Screen
        name={"RepairStackNavigator"}
        component={RepairStackNavigator}
      />
      <MainTab.Screen name="Profile" component={Profile} />
    </MainTab.Navigator>
  );
}
