import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Signup from "../../Components/Credentials/signup";
import Login from "../../Components/Credentials/login";

const Tabs = createBottomTabNavigator();

const LandingPage: React.FC<any> = () => {
  const [username_login, SetUsernameLogin] = useState<string>("");
  const [password_login, SetPasswordLogin] = useState<string>("");
  const [username_signup, SetUsernameSignup] = useState<string>("");
  const [password_signup, SetPasswordSignup] = useState<string>("");
  const [confirm_signup, SetConfirmSignup] = useState<string>("");
  const [email_signup, SetEmailSignup] = useState<string>("");

  const LoginUsernameChange = (value: string): void => {
    SetUsernameLogin(value);
  };

  const LoginPasswordChange = (value: string): void => {
    SetPasswordLogin(value);
  };

  const SignupUsernameChange = (value: string): void => {
    SetUsernameSignup(value);
  };

  const SignupPasswordChange = (value: string): void => {
    SetPasswordSignup(value);
  };

  const SignupConfirmChange = (value: string): void => {
    SetConfirmSignup(value);
  };

  const SignupEmailChange = (value: string): void => {
    SetEmailSignup(value);
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Login"
        tabBarOptions={{
          activeTintColor: "#ff385c",
          allowFontScaling: true,
          labelStyle: {
            fontWeight: "bold",
            fontSize: 13,
          },
          labelPosition: "beside-icon",
        }}
        lazy={true}
      >
        <Tabs.Screen
          name="Login"
          options={{
            title: "Login",
            tabBarIcon: () => {
              return <Ionicons name="ios-star" size={25} color="#ff385c" />;
            },
          }}
        >
          {() => (
            <Login
              username={username_login}
              password={password_login}
              ChangePassword={LoginPasswordChange}
              ChangeUsername={LoginUsernameChange}
            />
          )}
        </Tabs.Screen>
        <Tabs.Screen
          name="Signup"
          options={{
            title: "Signup",
            tabBarIcon: () => {
              return (
                <Ionicons name="log-in-outline" size={25} color="#ff385c" />
              );
            },
          }}
        >
          {() => (
            <Signup
              username={username_signup}
              password={password_signup}
              confirm={confirm_signup}
              email={email_signup}
              ChangePassword={SignupPasswordChange}
              ChangeConfirm={SignupConfirmChange}
              ChangeEmail={SignupEmailChange}
              ChangeUsername={SignupUsernameChange}
            />
          )}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;
