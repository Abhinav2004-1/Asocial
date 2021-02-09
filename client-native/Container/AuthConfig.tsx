import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderPage from '../Components/UI/LoaderPage';
import { enableScreens } from 'react-native-screens';

enableScreens();

interface PROPS {
    navigation: any
};

const AuthConfig: React.FC<PROPS> = ({navigation}) => {

    useEffect( () => {
        const CheckAuth = async (): Promise<void> => {
            const token = await AsyncStorage.getItem('auth-token');
            if(token){
                interface Response {
                    authentication: boolean,
                    userData?: object
                };
                const response: Response = await axios.post('/check-auth', {Token: token});
                if(response.authentication){
                    navigation.replace('MainPage');
                }else{
                    navigation.replace('LandingPage');
                }
            }else{
                navigation.replace('LandingPage');
            }
        };
        CheckAuth();
    }, []);

    return <LoaderPage/>;
};

export default AuthConfig;