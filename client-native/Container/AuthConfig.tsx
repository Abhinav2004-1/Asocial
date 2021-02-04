import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoader from "../Components/UI/LoadingPage";
import axios from 'axios';

enableScreens();
interface PROPS {
  navigation: any
}

const AuthConfig: React.FC<PROPS> = ({ navigation }) => {

    const [auth_status, SetAuthStatus] = useState<boolean | null>(null);
  
    const CheckAuthenticationFromLocalStorage = async (): Promise<void> => {
      const token = await AsyncStorage.getItem("auth-token");
      if (token) {
        axios.post('/check-auth', { authtoken: token }).then((response: any) => {
          AsyncStorage.setItem('UserInfo', response.data).then(() => {
            SetAuthStatus(true);
            navigation.replace('MainPage');
          });
        })
      }else{
        SetAuthStatus(false);
        navigation.replace('LandingPage');
      }
    };
  
    useEffect(() => {
      CheckAuthenticationFromLocalStorage();
    }, []);

    return (
        <View>
            {
              auth_status === null ? <AppLoader/> : null
            }
        </View>
    )
};

export default AuthConfig;