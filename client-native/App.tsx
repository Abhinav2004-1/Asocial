import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './Container/MainPage/mainpage';
import LandingPage from './Container/LandingPage/landingpage';

enableScreens();

import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import AuthConfig from './Container/AuthConfig';

const HeaderIcon: React.FC<{title: string, iconName: any}> = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent = {Ionicons}
            iconSize = {22}
        />
    )
}

const Stack = createStackNavigator();

function App() {

    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AuthConfig' screenOptions = {{headerTitle: 'Asocial'}}>
                <Stack.Screen
                    name = 'AuthConfig'
                    component = {AuthConfig}
                    options = {{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name = 'MainPage'
                    component = { MainPage }
                />
                <Stack.Screen
                    name = 'LandingPage'
                    component = { LandingPage }
                    options = {
                        {
                            title: 'Welcome to Asocial',
                            headerRight: () => {
                                return (
                                    <HeaderButtons HeaderButtonComponent = {HeaderIcon}>
                                        <Item
                                            title = 'WELCOME TO ASOCIAL'
                                            iconName = 'ios-star'
                                        />
                                        <Item
                                            title = 'WELCOME TO ASOCIAL'
                                            iconName = 'ios-home'
                                        />
                                    </HeaderButtons>
                                )
                            }
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
};

export default App;