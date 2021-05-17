import React, {Component} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Alert, TextInput} from 'react-native'
import MyHeader from '../components/MyHeader' 
import db from '../config'
import firebase from 'firebase'

export default class RequestScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            userId : firebase.auth().currentUser.email,
            bookName : '',
            reasonToRequest : ''
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <MyHeader title = "Request A Book"/>
                <KeyboardAvoidingView style = {styles.keyBoardStyle}>

                    <TextInput style = {styles.formTextInput}
                    placeholder = {"Enter Book Name"}
                    onChangeText = {(text) => {
                        this.setState({
                            bookName : text
                        })
                    }}
                    value = {this.state.bookName}/>

                    <TextInput style = {[styles.formTextInput, {height : 300}]}
                    multiline
                    numberOfLines = {8}
                    placeholder = {"Reason for requesting the book"}
                    onChangeText = {(text) => {
                        this.setState({
                            reasonToRequest : text
                        })
                    }}
                    value = {this.state.reasonToRequest}/>

                    <TouchableOpacity style = {styles.button}
                    onPress ={() =>{
                        this.addRequest(this.state.bookName, this.state.reasonToRequest)
                    }}>
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addRequest =(bookName, reasonToRequest)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection("requested_books").add({"user_id" : userId, "book_name" : bookName, "reason_to_request" : reasonToRequest, "requestId" : randomRequestId})
        this.setState({
            bookName : "",
            reasonToRequest : ""
        })

        return Alert.alert("Request Created")
    }
}

styles = StyleSheet.create({
    container : {
        flex : 1
    }
})