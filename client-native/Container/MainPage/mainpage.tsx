import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import MessageNavigation from "../../Components/MainPage/MessageNavigation";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import SettingsNavigation from "../../Components/MainPage/SettingsNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CallNavigation from "../../Components/MainPage/CallNavigation";
enableScreens();

const Tabs = createBottomTabNavigator();

const MainPage = () => {
  const [messages, SetMessages] = useState<object[] | null>(null);
  const [search_value, SetSearchValue] = useState<string>("");
  const [refreshing, SetRefresing] = useState<boolean>(false);
  const [username, SetUsername] = useState<any>(
    AsyncStorage.getItem("Username")
  );
  const [password, SetPassword] = useState<any>(AsyncStorage.getItem("ID"));

  const LoadRefreshedData = async (): Promise<void> => {
    // axios call
    let user_name: string | null;
    let pass_word: string | null;
    if (username && password) {
      user_name = username;
      pass_word = password;
    } else {
      user_name = await AsyncStorage.getItem("Username");
      pass_word = await AsyncStorage.getItem("Password");
    }
    const response = await axios.get(`/message-info/${user_name}/${pass_word}`);
  };

  const ChangeRefreshState = (): void => {
    SetRefresing(true);
    LoadRefreshedData();
  };

  const ChangeSeachValue = (value: string): void => {
    SetSearchValue(value);
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#ff385c",
          labelStyle: {
            fontWeight: "bold",
            fontSize: 12,
          },
        }}
        lazy={true}
      >
        <Tabs.Screen
          name="Messages-nav"
          options={{
            title: "Messages",
            tabBarIcon: () => {
              return (
                <FontAwesome5
                  size={25}
                  color="#ff385c"
                  name="facebook-messenger"
                />
              );
            },
          }}
        >
          {() => (
            <MessageNavigation
              ChangeSearchValue={(text: string) => ChangeSeachValue(text)}
              refreshing={refreshing}
              search_value = {search_value}
              ChangeRefreshState = {ChangeRefreshState}
              MessagesList = {[{ProfilePic: '', id: '', messages: [{}], username: ''}]}
            />
          )}
        </Tabs.Screen>

        <Tabs.Screen
          name="Call-nav"
          options={{
            title: "Calls",
            tabBarIcon: () => {
              return <Feather size={24} color="#ff385c" name="phone-call" />;
            },
          }}
        >
          {() => <CallNavigation />}
        </Tabs.Screen>

        <Tabs.Screen
          name="Settings-nav"
          options={{
            title: "Settings",
            tabBarIcon: () => {
              return <Ionicons size={28} color="#ff385c" name="ios-settings" />;
            },
          }}
        >
          {() => <SettingsNavigation />}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainPage;
