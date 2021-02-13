import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import MessageNavigation from "../../Components/MainPage/MessageNavigation";
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import SettingsNavigation from "../../Components/MainPage/SettingsNavigation";
enableScreens();

const Tabs = createBottomTabNavigator();

const MainPage = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#ff385c",
          labelStyle: {
            fontWeight: "bold",
            fontSize: 12
          },
        }}
        lazy={true}
      >
        <Tabs.Screen name="Messages-nav" options={{
            title: 'Messages',
            tabBarIcon: () => {
                return <FontAwesome5 size={25} color= '#ff385c' name='facebook-messenger'/>
            }
        }}>
          {() => <MessageNavigation />}
        </Tabs.Screen>

        <Tabs.Screen name="Call-nav" options={{
            title: 'Calls',  
            tabBarIcon: () => {
                return <Feather size={24} color= '#ff385c' name='phone-call'/>
            }
        }}>
          {() => <MessageNavigation />}
        </Tabs.Screen>

        <Tabs.Screen name="Settings-nav" options={{
            title: 'Settings',
            tabBarIcon: () => {
                return <Ionicons size={28} color= '#ff385c' name='ios-settings'/>
            }
        }}>
          {() => <SettingsNavigation />}
        </Tabs.Screen>

      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainPage;