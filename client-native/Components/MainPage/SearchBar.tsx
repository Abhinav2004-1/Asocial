import React from 'react';
import { Dimensions, TextInput } from 'react-native';

interface PROPS {
    value: string;
    ChangeValue: CallableFunction
}

const SearchBar: React.FC<PROPS> = (props) => {
    return (
        <TextInput
          style = {{
              borderRadius: 20,
              width: Dimensions.get('window').width * (2.9/3),
              marginHorizontal: 'auto',
              marginTop: 10,
              marginBottom: 25,
              backgroundColor: 'rgb(230, 230, 230)',
              paddingHorizontal: '3%'
          }}
          placeholder = 'Search ...'
          placeholderTextColor = '#333'
          spellCheck = {false}
          value = {props.value}
          onChangeText = {text => props.ChangeValue(text)}
        />
    )
}

export default SearchBar;
