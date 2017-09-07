import React, { Component } from 'react';
import { 
    View,Text,TouchableOpacity,Alert,

 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation})=>({
        headerTitle: 'Home',
        headerLeft: 
            <TouchableOpacity
            onPress={()=>{navigation.navigate('DrawerOpen')}}
            >
                <Icon name='menu' size={30} style={{marginLeft: 10}}/>
            </TouchableOpacity>
        });
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{ flex: 1,backgroundColor: '#3da9f8' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }

}