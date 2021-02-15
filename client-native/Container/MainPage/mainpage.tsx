import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import MessageNavigation from "../../Components/MainPage/MessageNavigation";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import SettingsNavigation from "../../Components/MainPage/SettingsNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CallNavigation from "../../Components/MainPage/CallNavigation";
enableScreens();

const Tabs = createBottomTabNavigator();

const MainPage = () => {
  const [messages, SetMessages] = useState<Array<{
    ProfilePic: string;
    id: string;
    messages: Array<object>;
    username: string;
  }> | null>(null);
  const [search_value, SetSearchValue] = useState<string>("");
  const [refreshing, SetRefresing] = useState<boolean>(false);
  const [username, SetUsername] = useState<Promise<string | null> | string | null>(
    AsyncStorage.getItem("Username")
  );
  const [password, SetPassword] = useState<Promise<string | null> | string | null>(
    AsyncStorage.getItem("Password")
  );

  const LoadMessages = async (): Promise<void> => {
    // axios call
    let change_state = false;
    let user_name: Promise<string | null> | string | null;
    let pass_word: Promise<string | null> | string | null;
    if (username && password) {
      user_name = username;
      pass_word = password;
    } else {
      user_name = await AsyncStorage.getItem("Username");
      pass_word = await AsyncStorage.getItem("Password");
      change_state = true;
    }
    const response = await axios.get(`/message-info/${user_name}/${pass_word}`);
    if (
      JSON.stringify(response.data) !==
      JSON.stringify({ message_load_err: true })
    ) {
      SetMessages(response.data);
      SetRefresing(false);
    }
    if (change_state === true) {
      SetUsername(user_name);
      SetPassword(pass_word);
    }
  };

  const ChangeRefreshState = (): void => {
    SetRefresing(true);
    LoadMessages();
  };

  const ChangeSeachValue = (value: string): void => {
    SetSearchValue(value);
  };

  useEffect(() => {
    LoadMessages();
  }, []);

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Call-nav"
        tabBarOptions={{
          activeTintColor: "#ff385c",
          labelStyle: {
            fontWeight: "bold",
            fontSize: 12,
          },
          showLabel: false,
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
                  size={28}
                  color="grey"
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
              search_value={search_value}
              ChangeRefreshState={ChangeRefreshState}
              MessagesList={messages}
            />
          )}
        </Tabs.Screen>

        <Tabs.Screen
          name="Call-nav"
          options={{
            title: "Calls",
            tabBarIcon: () => {
              return <AntDesign name="play" size={40} color="#ff385c" />;
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
              return <Ionicons size={30} color="grey" name="ios-settings" />;
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
