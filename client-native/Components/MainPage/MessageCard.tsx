import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

interface PROPS {
  ProfilePic: string;
  name: string;
  Messages: Array<object>;
}

const MessageCard: React.FC<PROPS> = (props) => {
  return (
    <View style={Styles.MainContainer}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          resizeMode: "contain",
          marginRight: '4%'
        }}
        source={{ uri: props.ProfilePic }}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{ props.name }</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
    MainContainer: {
        paddingVertical: 10,
        paddingHorizontal: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(206, 206, 206)',
        borderRadius: 10
    }
})

export default MessageCard;
