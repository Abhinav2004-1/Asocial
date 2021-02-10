import React, { useEffect, useState } from "react";
import { Animated, View, Text, StyleSheet, StatusBar } from "react-native";

const Signup = () => {
  return (
    <View style={Styles.SignUpContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}>
        SIGNUP
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
  );
};

const Styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 10,
    paddingTop: 8,
    backgroundColor: 'rgb(236, 236, 236)'
  },
});

export default Signup;
