import React, { Component } from 'react';

import {
    StackNavigator,TabNavigator,DrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './../shop/home/HomeScreen';
import AuthScreen from './../auth/AuthScreen';
import AuthScreenEd from './../auth/AuthScreenEd';
import SignInScreen from './../auth/signIn/SignInScreen';
import SignUpScreen from './../auth/signUp/SignUpScreen';
import CartScreen from './../shop/cart/CartScreen';
import SearchScreen from './../shop/search/SearchScreen';
import ContactScreen from './../shop/contact/ContactScreen';

/**
 * Auth stack 
 */
const AuthStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Auth: {
        screen: AuthScreen
    },
    AuthEd: {
        screen: AuthScreenEd
    },
    SignIn: {
        screen: SignInScreen
    },
    SignUp: {
        screen: SignUpScreen
    }
});
/**
 * Home Stack
 */
const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen
       
    },
});
/**
 * Cart Stack
 */
const CartStack = StackNavigator({
    Cart: {
        screen: CartScreen
    }
});
/**
 * Search Stack
 */
const SearchStack = StackNavigator({
    Search: {
        screen: SearchScreen
    }
},
// stack config
// {

// }
);
/**
 * Contact Stack
 */
const ContactStack = StackNavigator({
    Contact: {
        screen: ContactScreen
    }
});
/**
 * My Tab 
 */
const MyTab = TabNavigator({
    HomeTab: {
        screen: HomeStack,
        navigationOptions :{
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="home" 
                  size={30} 
                  color="#cb2f2b"
                />
              ),
          }
        
    },
    CartTab: {
        screen: CartStack,
        navigationOptions :{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="shopping-cart" 
                  size={30} 
                  color="#cb2f2b"
                />
              ),
        }
    },
    SearchTab: {
        screen: SearchStack,
        navigationOptions :{
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="search" 
                  size={30} 
                  color="#cb2f2b"
                />
              ),
          }
    },
    ContactTab: {
        screen: ContactStack,
        navigationOptions :{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="loyalty" 
                  size={30} 
                  color="#cb2f2b"
                />
              ),
          }
    }
},
// tab config
{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
}
);
/**
 * drawer menu
 */

 const Menu = DrawerNavigator({
     DrawMenu: {
        screen: MyTab,
        navigationOptions: {
           
        }
     }
    
 },
 {
    drawerWidth: 350,
    //drawerPosition: 'right',
    contentComponent: (props)=> <AuthScreen {...props }/>
    // contentOptions: {

    // }
  }
);
module.exports = Menu;