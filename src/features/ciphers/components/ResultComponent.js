import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, Text, ActivityIndicator } from 'react-native'
import HTML from 'react-native-render-html'
import {MAIN_GRAY, MAIN_COLOR_3} from '../../../utils/constants'
import Output from './Output'

const w = Dimensions.get("window").width
const h = Dimensions.get('window').height

export default class ResultComponent extends Component{
    render(){
        let {data, isError, isLoading, status} = this.props
        data = data.success
        output = null
        if(isLoading)
            output = (
                <View style={{flex:1, paddingHorizontal:20}}>
                    <ActivityIndicator size='large' color={MAIN_COLOR_3}/>
                </View>
            )
        else if(isError && status==400)
            output = (
                <View style={{alignItems:'center'}}>
                    <Text style={[styles.text, {color:'red'}]}>Error! The key length must be 8 or 32 characters depending on the algorithm.</Text>
                </View>
            )
        else if(isError && status!=400)
            output = (
                <View style={{alignItems:'center'}}>
                    <Text style={[styles.text, {color:'red'}]}>Server error! Status 500</Text>
                </View>
            )
        else if(data != null)
            output = (
                <Output data={data.output} type={data.type}/>
            )
        return(
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Result</Text>
                    <View style={styles.block}>
                        { output }
                    </View>
                </View>
                {
                    data!=null && !isLoading ? (
                        <View style={styles.container}>
                            <Text style={styles.title}>Introduction</Text>
                            <View style={styles.block}>
                                <HTML html={data.form}/>
                            </View>
                        </View>
                    ) : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        fontFamily: 'sf-medium',
        fontSize: 20,
        marginLeft: 5
    },
    block: {
        width: w,
        borderWidth: 1,
        borderColor: MAIN_GRAY,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: 'white',
    },
    text: {
        fontFamily: 'sf-regular',
        fontSize: 14,
    }
})