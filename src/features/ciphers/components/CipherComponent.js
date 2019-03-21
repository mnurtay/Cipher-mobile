import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, TextInput} from 'react-native'
import { MAIN_BACKGROUND, MAIN_GRAY } from '../../../utils/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements';
import {connect} from 'react-redux'
import {onResultFetching} from '../actions/ResultActions'
import OverlayComponent from './OverlayComponent'

const w = Dimensions.get("window").width
const h = Dimensions.get('window').height

class CipherComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            cipher: null,
            key: null,
            text: null,
            algorithm: 'Not chosen',
            needKey: this.props.cipherType.id!=1,
            error: false,
            errorText: null,
            overlayVisible: false
        }
    }

    _getResult = () => {

    }

    render(){
        let {ciphers} = this.props
        return(
            <ScrollView style={styles.container}>
                <View style={{marginTop:15, marginBottom:20}}>
                    <Text style={styles.title}>Cipher the text</Text>
                    <View style={styles.cipher}>
                        {/* --- Choosing algorithm --- */}
                        <TouchableOpacity style={styles.block} activeOpacity={0.4} onPress={()=>this.setState({overlayVisible:true})}>
                            <Text style={styles.text}>Choose algorithm:</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={[styles.text, {marginRight:10}]}>{this.state.algorithm}</Text>
                                <Icon name='chevron-down' size={16} style={{marginTop:3}}/>
                            </View>
                        </TouchableOpacity>
                        <OverlayComponent
                            isVisble={this.state.overlayVisible}
                            data={ciphers}
                        />
                        {/* --- Entering text for cipher --- */}
                        <View style={styles.block}>
                            <Text style={styles.text}>Enter text:</Text>
                            <TextInput
                                onChangeText={ (text)=>this.setState({text: text}) }
                                style={styles.textInput}
                                defaultValue={this.state.text}
                            />
                        </View>
                        {   /* --- Entering key for cipher --- */
                            this.state.needKey ?
                            <View style={styles.block}>
                                <Text style={styles.text}>Enter key:</Text>
                                <TextInput
                                    onChangeText={ (key)=>this.setState({key: key}) }
                                    style={styles.textInput}
                                    defaultValue={this.state.key}
                                />
                            </View>
                            : null
                        }
                        <Button
                            title={this.state.error ? this.state.errorText : 'Submit'}
                            titleStyle={styles.text}
                            buttonStyle={{borderRadius: 10, backgroundColor: this.state.error?'red':'green'}}
                            containerStyle={styles.btnContStyle}

                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        ResultReducers: state.ResultReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _on_result_fetching: async(to, obj) => {
            await dispatch(await onResultFetching(to, obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CipherComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MAIN_BACKGROUND
    },
    cipher: {
        width: w,
        borderWidth: 1,
        borderColor: MAIN_GRAY,
        borderRadius: 10,
        padding: 7,
        backgroundColor: 'white',
    },
    text: {
        fontFamily: 'sf-regular',
        fontSize: 16
    },
    title: {
        fontFamily: 'sf-medium',
        fontSize: 20,
        marginLeft: 5
    },
    block: {
        marginTop:2,
        marginBottom: 5, 
        paddingHorizontal:5, 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: w*.6,
        borderBottomWidth: 1,
        textAlign: 'right',
        fontFamily: 'sf-regular',
        fontSize: 15,
        paddingRight: 2
    },
    btnContStyle: {
        marginVertical: 15,
        marginHorizontal: 10,
    }
})