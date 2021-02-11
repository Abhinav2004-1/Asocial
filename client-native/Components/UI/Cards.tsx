import React from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet, ScrollView, Platform } from "react-native";

const Cards: React.FC<{children: any}> = ({ children }) => {
  return (
    <ScrollView style={{flex: 1}}>
        { children }
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  CardsContainer: {
    width: Dimensions.get("window").width * (2.8 / 3),
    padding: 10,
    shadowColor: "#333",
    shadowOffset: { width: 14, height: 14 },
    shadowOpacity: 0.85,
    elevation: 5,
    marginTop: 170,
    height: 200,
    backgroundColor: 'red'
  },
});

export default Cards;