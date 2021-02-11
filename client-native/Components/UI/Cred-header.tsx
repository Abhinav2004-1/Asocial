import React from "react";
import { Text } from "react-native";

const CredHeader: React.FC<{type: string}> = ({ type }) => {
  return (
    <>
      <Text style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}>
        { type }
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
    </>
  );
};

export default CredHeader;
