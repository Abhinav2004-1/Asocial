import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const MainPage = () => {
    return (
        <View style={Styles.MainPageContainer}>
            <StatusBar backgroundColor='#ff385c'/>
            <Text>Hello</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    MainPageContainer: {
        flex: 1,
        backgroundColor: 'rgb(223, 222, 222)'
    }
})

export default MainPage;
