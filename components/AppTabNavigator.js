import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RequestScreen from './screens/RequestScreen';
import DonateScreen from '../screens/DonateScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
        screens : DonateScreen,
        navigationOptions : {tabBarIcon : <Image source = {require('../assets/donate')} style = {{width : 20, height : 20}}/>,
        tabBarLabel : "Donate Books"}
    },
    RequestBooks : {
        screens : RequestScreen,
        navigationOptions : {tabBarIcon : <Image source = {require('../assets/request')} style = {{width : 20, height : 20}}/>,
        tabBarLabel : "Request Books"}
    },
})