import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Signup from "../../Components/Credentials/signup";
import Login from "../../Components/Credentials/login";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tabs = createBottomTabNavigator();

const LandingPage: React.FC<{ SetAuthentication: CallableFunction }> = (
  props
) => {
  const [username_login, SetUsernameLogin] = useState<string>("");
  const [password_login, SetPasswordLogin] = useState<string>("");
  const [username_signup, SetUsernameSignup] = useState<string>("");
  const [password_signup, SetPasswordSignup] = useState<string>("");
  const [confirm_signup, SetConfirmSignup] = useState<string>("");
  const [email_signup, SetEmailSignup] = useState<string>("");
  const [signup_username_err, SetSignupUsernameErr] = useState<boolean>(false);
  const [signup_password_err, SetSignupPasswordErr] = useState<boolean>(false);
  const [signup_confirm_err, SetSignupConfirmErr] = useState<boolean>(false);
  const [signup_email_err, SetSignupEmailErr] = useState<boolean>(false);
  const [login_username_err, SetLoginUsernameErr] = useState<boolean>(false);
  const [login_password_err, SetLoginPasswordErr] = useState<boolean>(false);
  const [login_cred_err, SetLoginCredErr] = useState<boolean>(false);

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

  const SubmitRegister = (): void => {
    if (
      username_signup.length >= 4 &&
      password_signup === confirm_signup &&
      password_signup.length >= 8 &&
      email_signup.length >= 11
    ) {
      const number_regex = /[0-9]/;
      if (number_regex.exec(password_signup) !== null) {
        // axios call
        const context = {
          Username: username_signup,
          Password: password_signup,
          Confirm: confirm_signup,
          Email: email_signup,
        };

        axios
          .post("http://192.168.0.105:8000/register", context)
          .then((response) => {
            const error = { registration_err: true };
            if (JSON.stringify(error) !== JSON.stringify(response.data)) {
              AsyncStorage.setItem("Username", username_login).then(() => {
                AsyncStorage.setItem("auth-token", response.data.token).then(
                  () => {
                    props.SetAuthentication(true);
                  }
                );
              });
            }
          });
      } else {
        SetSignupPasswordErr(true);
      }
    } else {
      if (username_signup.length < 4) {
        SetSignupUsernameErr(true);
      }
      if (password_signup !== confirm_signup) {
        SetSignupConfirmErr(true);
      }
      if (password_signup.length < 8) {
        SetSignupPasswordErr(true);
      }

      if (email_signup.length < 11) {
        SetSignupEmailErr(true);
      }
    }
  };

  const LoginSubmit = (): void => {
    if (username_login.length >= 4 && password_login.length >= 8) {
      const number_regex = /[0-9]/;
      if (number_regex.exec(password_login)) {
        const context = {
          Username: username_login,
          Password: password_login,
        };
        axios
          .post("http://192.168.0.105:8000/login", context)
          .then((response) => {
            if (
              JSON.stringify(response.data) !==
              JSON.stringify({ access_granted: false })
            ) {
              AsyncStorage.setItem("Username", username_login).then(() => {
                AsyncStorage.setItem("auth-token", response.data.token).then(
                  () => {
                    props.SetAuthentication(true);
                  }
                );
              });
            } else {
              SetLoginCredErr(true);
            }
          });
      } else {
        SetLoginPasswordErr(true);
      }
    } else {
      if (username_login.length < 4) {
        SetLoginUsernameErr(true);
      }
      if (password_login.length < 8) {
        SetLoginPasswordErr(true);
      }
    }
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
              login_cred_err={login_cred_err}
              username={username_login}
              password={password_login}
              ChangePassword={LoginPasswordChange}
              ChangeUsername={LoginUsernameChange}
              Submit={LoginSubmit}
              username_err={login_username_err}
              password_err={login_password_err}
            />
          )}
        </Tabs.Screen>
        <Tabs.Screen
          name="Signup"
          options={{
            title: "Signup",
            tabBarIcon: () => {
              return (
                <Entypo name="lock" size={24} color="#ff385c"/>
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
              Submit={SubmitRegister}
              username_err={signup_username_err}
              password_err={signup_password_err}
              confirm_err={signup_confirm_err}
              email_err={signup_email_err}
            />
          )}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;
