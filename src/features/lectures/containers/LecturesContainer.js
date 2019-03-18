import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class LecturesContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Lectures',
        }
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={{fontFamily:'sf-regular'}}>Lectures Container</Text>
            </View>
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