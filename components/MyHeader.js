import React, {Component} from 'react'
import {Text, View, StyleSheet, Alert} from 'react-native'
import {Header, Icon, Badge} from 'react-native-elements'

const MyHeader = props =>{
    return(
        <Header centerComponent = {{text : props.title, style : {color : "#2423ec", fontSize : 20, fontWeight : "bold"}}}
        backgroundColor = "#afbced"/>
    )
}

export default MyHeader;