import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Output extends Component{
    render(){
        let {data, type} = this.props
        output = null
        if(type=='rsa'){
            data = data.split('public key: -----BEGIN PUBLIC KEY-----')[1]
            publicKey = data.split('-----END PUBLIC KEY-----')[0].replace(/[\r\n]+/g, '')
            data = data.split('rsa_private_key: -----BEGIN RSA PRIVATE KEY-----')[1]
            privateKey = data.split('-----END RSA PRIVATE KEY-----')[0].replace(/[\r\n]+/g, '')
            encrypt = data.split("encrypted: b'")[1]
            output = (
                <View>
                    <View>
                        <Text style={styles.title}>Output:</Text>
                        <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3}>{encrypt}</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={styles.title}>Public Key:</Text>
                        <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3}>{publicKey}</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={styles.title}>Private Key:</Text>
                        <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3}>{privateKey}</Text>
                    </View>
                </View>
            )
        }
        else if(type=='ecc'){
            data = data.split('\n')[0].split("'")[1]
            output = (
                <View>
                    <Text style={styles.title}>Output:</Text>
                    <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3}>{data}</Text>
                </View>
            )
        }
        else if(type=='hash'){
            data = data.split('\n ')
            output = (
                <View>
                    <Text style={styles.title}>Output:</Text>
                    {
                        data.map((value, index) => (
                            <Text key={index} style={[styles.text, {marginTop:3}]}>{value}</Text>
                        ))
                    }
                </View>
            )
        }
        else
            output = (
                <View>
                    <Text style={styles.title}>Output:</Text>
                    <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3}>{data}</Text>
                </View>
            )

        return output
    }
} 

const styles = StyleSheet.create({
    title: {
        fontFamily: 'sf-regular',
        fontSize: 15
    },
    text: {
        fontFamily: 'sf-light',
        fontSize: 14,
        marginLeft: 20
    }
})