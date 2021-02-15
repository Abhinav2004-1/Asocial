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
import { TextInput, HelperText } from "react-native-paper";
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
  Submit: any;
  username_err: boolean;
  password_err: boolean;
  confirm_err: boolean;
  email_err: boolean;
}

const Signup: React.FC<PROPS> = (props) => {
  const PasswordRef = useRef<any>(null);
  const UsernameRef = useRef<any>(null);
  const ConfirmRef = useRef<any>(null);
  const EmailRef = useRef<any>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'position' : "height"}
      style={Styles.LandingPageContainer}
      keyboardVerticalOffset = {100}
    >
      <CredHeader type="SIGNUP" />
      <Card>
        <View style={{ marginTop: 10 }}>
          {/*// @ts-ignore */}
          <TextInput
            ref={UsernameRef}
            label="Username"
            mode="outlined"
            style={Styles.Input}
            value={props.username}
            error={props.username_err}
            onChangeText={(text): void => props.ChangeUsername(text)}
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
          <HelperText
            type="error"
            visible={props.username_err}
            style={props.username_err === false ? { display: "none" } : null}
          >
            Username Should be 4 characters or longer
          </HelperText>
          {/*// @ts-ignore */}
          <TextInput
            ref={PasswordRef}
            label="Password"
            secureTextEntry
            mode="outlined"
            error={props.password_err}
            style={Styles.Input}
            value={props.password}
            onChangeText={(text): void => props.ChangePassword(text)}
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

          <HelperText
            type="error"
            visible={props.password_err}
            style={props.password_err === false ? { display: "none" } : null}
          >
            Password should be atleast 8 characters
          </HelperText>

          <HelperText
            type="error"
            visible={props.password_err}
            style={props.password_err === false ? { display: "none" } : null}
          >
            Password should contain a number
          </HelperText>
          {/*// @ts-ignore */}
          <TextInput
            ref={ConfirmRef}
            label="Confirm"
            secureTextEntry
            mode="outlined"
            style={Styles.Input}
            value={props.confirm}
            error={props.confirm_err}
            onChangeText={(text): void => props.ChangeConfirm(text)}
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

          <HelperText
            type="error"
            visible={props.confirm_err}
            style={props.confirm_err === false ? { display: "none" } : null}
            theme={{
              colors: {
                primary: "#ff385c",
              },
            }}
          >
            Passwords not matching
          </HelperText>
          {/*// @ts-ignore */}
          <TextInput
            ref={EmailRef}
            label="Email"
            mode="outlined"
            style={Styles.Input}
            value={props.email}
            error={props.email_err}
            onChangeText={(text): void => props.ChangeEmail(text)}
            theme={{
              colors: {
                placeholder: "#333",
                text: "#333",
                primary: "#00ACEE",
                error: "#ff385c",
              },
            }}
          />

          <HelperText
            type="error"
            visible={props.email_err}
            style={props.email_err === false ? { display: "none" } : null}
          >
            Invalid Email Credentials
          </HelperText>

          <TouchableOpacity
            onPress={props.Submit}
            style={{ paddingHorizontal: "2%", marginTop: 35, marginBottom: 20 }}
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