import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class NewsContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return{
            title: 'News',
        }
    }
    
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={{fontFamily:'sf-regular', fontSize:20}}>News Container</Text>
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