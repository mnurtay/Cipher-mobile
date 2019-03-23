import React, { Component } from 'react'
import { Overlay } from 'react-native-elements'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { MAIN_GRAY } from '../../../utils/constants'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class OverlayComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {isVisible, data, _choose_cipher} = this.props
        return(
            <Overlay isVisible={isVisible} onBackdropPress={()=>_choose_cipher(null)}>
                <View style={{ flex:1 }}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Choose algorithm</Text>
                    </View>
                    <ScrollView style={{flex:1}}>
                        {
                            data.map((value) => (
                                <TouchableOpacity
                                    style={styles.block}
                                    key={value.id}
                                    onPress={()=>_choose_cipher(value)}>
                                    <Text style={styles.text}>{value.name}</Text>
                                    <Icon name='angle-right' size={18}/>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            </Overlay>
        )
    }
}

const styles = StyleSheet.create({
    titleView: {
        borderBottomWidth: 1,
        borderColor: MAIN_GRAY,
        paddingHorizontal: 4,
        paddingVertical: 7
    },
    title: {
        fontFamily: 'sf-medium',
        fontSize: 22
    },
    block: {
        paddingTop: 12,
        paddingBottom: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'sf-regular',
        fontSize: 17
    }
})