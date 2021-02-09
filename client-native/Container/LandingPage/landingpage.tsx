import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Signup from "../../Components/Credentials/signup";
import Login from "../../Components/Credentials/login";

const Tabs = createBottomTabNavigator();

const LandingPage = () => {
  return (
    <View style={Styles.LandingPageContainer}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen 
            name = 'Login'
            component = {Login}
            options = {{
              tabBarIcon: () => {
                return <Ionicons name='ios-star' size={22} color='#333'/>
              }
            }}
          />
          <Tabs.Screen 
            name = 'Signup'
            component = {Signup}
            options = {{
              tabBarIcon: () => {
                return <Ionicons name='ios-star' size={22} color='#333'/>
              }
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Styles = StyleSheet.create({
  LandingPageContainer: {
    flex: 1,
    backgroundColor: "rgb(223, 222, 222)",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LandingPage;