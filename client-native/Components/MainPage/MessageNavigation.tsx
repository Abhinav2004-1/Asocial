import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MessageCard from './MessageCard';
import SearchBar from './SearchBar';

interface PROPS {
    MessagesList: Array<{ProfilePic: string, id: string, messages: Array<object>, username: string}>;
    ChangeSearchValue: any;
    refreshing: boolean;
    search_value: string;
    ChangeRefreshState: any
}

const MessageNavigation: React.FC<PROPS> = (props) => {

    return (
        <View style={Styles.MainPageContainer}>
            <FlatList 
                data = {props.MessagesList} 
                keyExtractor = {element => element.id}
                renderItem = {element => {
                    return <MessageCard name={element.item.username} ProfilePic={element.item.ProfilePic} Messages={element.item.messages}/>
                }}
                ListHeaderComponent = {() => <SearchBar value={props.search_value} ChangeValue={(text: string) => props.ChangeSearchValue(text)}/>}
                refreshing = {props.refreshing}
                onRefresh = {props.ChangeRefreshState}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    MainPageContainer: {
        flex: 1,
        backgroundColor: 'rgb(223, 222, 222)'
    }
});

export default MessageNavigation;
