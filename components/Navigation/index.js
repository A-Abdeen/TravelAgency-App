import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../authentication/Profile";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Sign In"
        component={Signin}
        options={{ headerShown: true }}
      />
      <Screen
        name="Sign Up"
        component={Signup}
        options={{ headerShown: true }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
};

export default RootNavigator;
