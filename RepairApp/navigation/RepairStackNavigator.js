import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import RepairList from "../screens/RepairList";
import RepairDetail from "../screens/RepairDetail";
import RepairCreate from "../screens/RepairCreate";

const RepairStack = createStackNavigator();
export function RepairStackNavigator() {
  return (
    <RepairStack.Navigator>
      <RepairStack.Screen name={"RepairList"} component={RepairList} options={{headerShown: false}}/>
      <RepairStack.Screen
        name={"RepairDetail"}
        component={RepairDetail}
        options={{ title: "Detail" }}
      />
      <RepairStack.Screen name={"RepairCreate"} component={RepairCreate} options={{ title: "Create"}}/>
    </RepairStack.Navigator>
  );
}
