import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class CiphersContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Cipher',
        }
    }
    
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={{fontFamily:'sf-regular'}}>Ciphers Container</Text>
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