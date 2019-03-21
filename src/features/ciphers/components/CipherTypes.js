import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from 'react-native'
import {MAIN_BACKGROUND, MAIN_GRAY} from '../../../utils/constants'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

export default class CipherTypes extends Component {
    constructor(props){
        super(props)
    }

    goTo = (item) => {
        this.props.navigation.navigate("Cipher", {cipherType: item})
    }

    render(){
        let {data} = this.props
        return(
            <View style={styles.viewStyle}>
                {
                    data.map((value) => (
                        <TouchableOpacity
                            key={value.id}
                            style={styles.block}
                            activeOpacity={0.3}
                            onPress={()=>this.goTo(value)}>
                            <Text style={styles.text}>{value.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: MAIN_BACKGROUND
    },
    block: {
        width: w*.8,
        height: h*.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: MAIN_GRAY
    },
    text: {
        fontFamily: 'sf-regular',
        fontSize: 20
    },
})