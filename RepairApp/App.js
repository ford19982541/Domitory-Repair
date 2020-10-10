import React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import LoginStack from "./navigation/TabNavigator";

export default function App() {
  return (
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <LoginStack></LoginStack>
        </ApplicationProvider>
      </NavigationContainer>
  );
}
