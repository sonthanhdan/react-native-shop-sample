import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SearchScreen extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle: 'Search',
        headerLeft: 
            <TouchableOpacity
            onPress={()=>{navigation.navigate('DrawerOpen')}}
            >
                <Icon name='menu' size={30} style={{marginLeft: 10}}/>
            </TouchableOpacity>
        });
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#ee5a36' }} >
                <Text>Search Screen</Text>
            </View>
        );
    }

}