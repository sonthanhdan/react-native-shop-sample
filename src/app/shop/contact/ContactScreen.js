import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ContactScreen extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle: 'Contact',
        headerLeft: 
            <TouchableOpacity
            onPress={()=>{navigation.navigate('DrawerOpen')}}
            >
                <Icon name='menu' size={30} style={{marginLeft: 10}}/>
            </TouchableOpacity>
        });
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#81ab3d' }}>
                <Text>Contact Screen</Text>
            </View>
        );
    }

}