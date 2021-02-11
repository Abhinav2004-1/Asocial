import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import Card from "../UI/Cards";
import CredHeader from "../UI/Cred-header";

interface PROPS {
  username: string;
  password: string;
  confirm: string;
  email: string;
  ChangeUsername: CallableFunction;
  ChangePassword: CallableFunction;
  ChangeEmail: CallableFunction;
  ChangeConfirm: CallableFunction;
}

const Signup: React.FC<PROPS> = (props) => {
  const PasswordRef = useRef<any>(null);
  const UsernameRef = useRef<any>(null);
  const ConfirmRef = useRef<any>(null);
  const EmailRef = useRef<any>(null);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={50}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.LandingPageContainer}
    >
      <CredHeader type="SIGNUP" />
      <Card>
        <View style={{ marginTop: 10 }}>
          <TextInput
            ref={UsernameRef}
            label="Username"
            mode="outlined"
            style={Styles.Input}
            value={props.username}
            onChangeText={(text) => props.ChangeUsername(text)}
            theme={{
              colors: {
                placeholder: "#333",
                text: "#333",
                primary: "#00acee",
                error: "red",
              },
            }}
            onSubmitEditing={(): void => PasswordRef.current.forceFocus()}
          />

          <TextInput
            ref={PasswordRef}
            label="Password"
            secureTextEntry
            mode="outlined"
            style={Styles.Input}
            value={props.password}
            onChangeText={(text) => props.ChangePassword(text)}
            theme={{
              colors: {
                placeholder: "#333",
                text: "#333",
                primary: "#00ACEE",
                error: "#ff385c",
              },
            }}
            onSubmitEditing={(): void => ConfirmRef.current.forceFocus()}
          />

          <TextInput
            ref={ConfirmRef}
            label="Confirm"
            secureTextEntry
            mode="outlined"
            style={Styles.Input}
            value={props.confirm}
            onChangeText={(text) => props.ChangeConfirm(text)}
            theme={{
              colors: {
                placeholder: "#333",
                text: "#333",
                primary: "#00ACEE",
                error: "#ff385c",
              },
            }}
            onSubmitEditing={(): void => EmailRef.current.forceFocus()}
          />

          <TextInput
            ref={EmailRef}
            label="Email"
            secureTextEntry
            mode="outlined"
            style={Styles.Input}
            value={props.email}
            onChangeText={(text) => props.ChangeEmail(text)}
            theme={{
              colors: {
                placeholder: "#333",
                text: "#333",
                primary: "#00ACEE",
                error: "#ff385c",
              },
            }}
          />

          <TouchableOpacity
            onPress={() => console.log("hello")}
            style={{ paddingHorizontal: "2%", marginTop: 40 }}
          >
            <View style={Styles.LoginButton}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                Register
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  LandingPageContainer: {
    flex: 1,
    backgroundColor: "rgb(236, 236, 236)",
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 15,
    paddingTop: 8,
    alignItems: "center",
  },

  Input: {
    paddingHorizontal: "3%",
    width: Dimensions.get("window").width * (2.8 / 3),
    backgroundColor: "rgb(221, 219, 219)",
    color: "#333",
    borderRadius: 10,
    marginTop: 15,
  },

  LoginButton: {
    width: Dimensions.get("window").width * (2.7 / 3),
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff385c",
    borderRadius: 5,
    paddingHorizontal: "3%",
  },
});

export default Signup;
