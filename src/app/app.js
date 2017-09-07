import React, { Component } from 'react';
import { 
    
    View,Text,StatusBar,
    TouchableOpacity,Alert


} from 'react-native';
import Menu from './routes/Router';


export default class App extends Component {
    render(){
        return(
           <Menu/>
        );
    }
}