import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';

const LoaderPage = () => {
    return (
        <View style = {Styles.LoaderContainer}>
            <ActivityIndicator size='small' color='#fff'/>
        </View>
    )
}

const Styles = StyleSheet.create({
    LoaderContainer: {
        height: Dimensions.get('window').height,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoaderPage;
