import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native'
import { MAIN_BACKGROUND, MAIN_GRAY } from '../../../utils/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements';
import {connect} from 'react-redux'
import {onResultFetching} from '../actions/ResultActions'
import OverlayComponent from './OverlayComponent'
import ResultComponent from './ResultComponent'

const w = Dimensions.get("window").width

class CipherComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            cipher: null,
            key: null,
            text: null,
            algorithm: 'Not chosen',
            needKey: this.props.cipherType.id!=3 && this.props.cipherType.id!=2,
            error: false,
            errorText: null,
            overlayVisible: false,
            showResult: false
        }
    }

    _choose_cipher = (data) => {
        if(data!=null)
            this.setState({
                cipher: data,
                overlayVisible: false,
                algorithm: data.name
            })
        else
            this.setState({ overlayVisible:false })
    }

    _get_api_location = (data) => {
        switch (data.algorithm_class) {
            case 1: return 'symmetric'
            case 2: return 'assymmetric'
            case 3: return 'hash'
            case 4: return 'basics'
        }
    }

    _getResult = () => {
        let {cipher, text, key, needKey} = this.state
        if(cipher==null)
            return this.setState({ error:true, errorText:'Choose algorithm!' })
        else if(text==null)
            return this.setState({ error:true, errorText:'Enter text!' })
        else if(needKey && key==null)
            return this.setState({ error:true, errorText:'Enter key!' })
        
        to = this._get_api_location(cipher)
        obj = {
            text: text,
            type: cipher.algorithm_option,
            key: key
        }
        this.setState({ error:false, showResult:true })
        this.props._on_result_fetching(to, obj)
    }

    render(){
        let {ciphers} = this.props
        let {result, isError, isLoading, status} = this.props.ResultReducers
        btnColor = isLoading ? 'gold' : 'green'
        return(
            <ScrollView style={styles.container}>
                <View style={{marginTop:15, marginBottom:20, alignItems:'center'}}>
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
                            isVisible={this.state.overlayVisible}
                            data={ciphers}
                            _choose_cipher={this._choose_cipher}
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
                            title={this.state.error ? this.state.errorText : 'Calculate'}
                            titleStyle={styles.text}
                            buttonStyle={{borderRadius: 10, backgroundColor: this.state.error?'red':btnColor}}
                            containerStyle={styles.btnContStyle}
                            onPress={()=>this._getResult()}
                            loading={isLoading}
                        />
                    </View>
                </View>
                {
                    this.state.showResult ?
                    <ResultComponent data={result} isError={isError} isLoading={isLoading} status={status}/>
                    : null
                }
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
        width: w*.95,
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
        marginLeft: 5,
        width: w*.95
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