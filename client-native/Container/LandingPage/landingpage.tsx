import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

const LandingPage = () => {
  const slide = useState<any>(new Animated.Value(90))[0];
  const rotate = useState<any>(new Animated.ValueXY({x: 1, y: 1}))[0];

  useEffect((): void => {
    Animated.timing(slide, {
      toValue: 720,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={Styles.LandingPageContainer}>
      <Animated.View
          style={[
            {
              transform: [{rotate: }]
            },
            Styles.slideContainer,
          ]}
        >

        </Animated.View>
    </View>
  );
};

const Styles = StyleSheet.create({
  LandingPageContainer: {
    flex: 1,
    backgroundColor: "rgb(223, 222, 222)",
    alignItems: 'center',
    justifyContent: 'center'
  },

  slideContainer: {
    backgroundColor: "red",
    height: 200,
    width: "80%",
  },
});

export default LandingPage;