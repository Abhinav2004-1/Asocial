import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text, StatusBar } from 'react-native';

const Login = () => {
    return (
      <View style={Styles.LandingPageContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}>
        LOGIN
      </Text>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 18,
          color: "grey",
          marginTop: 5,
          textAlign: "center",
          letterSpacing: 1
        }}
      >
        Welcome to Asocial
      </Text>
    </View>
    )
};

const Styles = StyleSheet.create({
    LandingPageContainer: {
      flex: 1,
      backgroundColor: "rgb(236, 236, 236)",
      marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 15,
      paddingTop: 8
    }
  });

export default Login;
