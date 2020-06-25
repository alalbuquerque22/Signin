import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Login from "./pages/Login";
import Create from "./pages/Create";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Create" component={Create} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
