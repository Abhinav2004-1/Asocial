import React, { useEffect, useState } from "react";
import { enableScreens } from "react-native-screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import LandingPage from "./Container/LandingPage/landingpage";
import MainPage from "./Container/MainPage/mainpage";
enableScreens();
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#ff385c',
  },
};

function App() {
  const [auth_status, SetAuthStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const ProcessAuthConfigs = async (): Promise<void> => {
      const Token = await AsyncStorage.getItem("auth-token");
      if (Token) {
        const LocalData = await AsyncStorage.getAllKeys();
        if (LocalData.length >= 5) {
          const response = await axios.post("check-auth", { Token });
          if (response.data.status === true) {
            SetAuthStatus(true);
          } else {
            SetAuthStatus(false);
          }
        } else {
          SetAuthStatus(false);
        }
      } else {
        SetAuthStatus(false);
      }
    };

    ProcessAuthConfigs();
  }, []);

  return (
    <>
      <PaperProvider theme={theme}>
        {auth_status === true ? <MainPage /> : null}
        {auth_status === false ? <LandingPage /> : null}
      </PaperProvider>
    </>
  );
}

export default App;
