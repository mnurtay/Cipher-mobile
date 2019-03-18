import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const ht = `<h3>The AES Symmetric-Key Cipher</h3>`;

export default class LecturesContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Lectures',
        }
    }

    render(){
        return(
            <ScrollView style={{flex:1, paddingHorizontal:10}}>
                <HTML html={ht} imagesMaxWidth={Dimensions.get('window').width}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    }
})