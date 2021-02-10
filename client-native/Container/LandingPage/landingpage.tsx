import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Signup from "../../Components/Credentials/signup";
import Login from "../../Components/Credentials/login";

const Tabs = createBottomTabNavigator();

const LandingPage = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Login"
        tabBarOptions={{
          activeTintColor: "#ff385c",
          allowFontScaling: true,
          labelStyle: {
            fontWeight: "bold",
            fontSize: 13
          },
          labelPosition: 'beside-icon'
        }}
        lazy={true}
      >
        <Tabs.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            tabBarIcon: () => {
              return <Ionicons name="ios-star" size={25} color="#ff385c" />;
            },
          }}
        />
        <Tabs.Screen
          name="Signup"
          component={Signup}
          options={{
            title: "Signup",
            tabBarIcon: () => {
              return (
                <Ionicons name="log-in-outline" size={25} color="#ff385c" />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;
