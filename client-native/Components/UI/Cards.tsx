import React from "react";
import { ScrollView } from "react-native";

const Cards: React.FC<{children: any}> = ({ children }) => {
  return (
    <ScrollView style={{flex: 1}}>
        { children }
    </ScrollView>
  );
};

export default Cards;