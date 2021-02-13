import React from "react";
import { Text } from "react-native";

const CredHeader: React.FC<{type: string}> = ({ type }) => {
  return (
    <>
      <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center", marginTop: 12 }}>
        { type }
      </Text>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 18,
          color: "grey",
          marginTop: 6,
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
