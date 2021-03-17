import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../authentication/Profile";
import SearchForm from "../searchFlight/SearchForm";
import SearchList from "../searchFlight/SearchList";
import ContactForm from "../booking/ContactForm";
import PassengerForm from "../booking/PassengerForm";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Contact Form">
      {/* <Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
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
      <Screen
        name="Search Form"
        component={SearchForm}
        options={{ headerShown: true }}
      />
      <Screen
        name="Search List"
        component={SearchList}
        options={{ headerShown: true }}
      />
      <Screen
        name="Contact Form"
        component={ContactForm}
        options={{ headerShown: true }}
      />
      <Screen
        name="Passenger Form"
        component={PassengerForm}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
};

export default RootNavigator;
