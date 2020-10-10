import React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { FontAwesome5IconsPack } from "./components/fontawesome-icons";
import { AuthStackNavigator } from "./navigation/AuthStackNavigator";
import { MainTabNavigator } from "./navigation/MainTabNavigator";
import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./contexts/AuthContext";
import { UserContext } from "./contexts/UserContext";
import {SplashScreen} from './screens/SplashScreen';
const RootStack = createStackNavigator();

export default function App() {
  const { auth, state } = useAuth();

  function renderScreens() {
    if (state.loading) {
      return (
        <RootStack.Screen
          name={"Splash"}
          component={SplashScreen}
        />
      );
    }
    return state.user ? (
      <RootStack.Screen name={"MainStack"}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainTabNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
    );
  }

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <IconRegistry icons={[EvaIconsPack, FontAwesome5IconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
