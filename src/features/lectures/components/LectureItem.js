import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Image } from 'react-native-elements'
import { MAIN_GRAY } from '../../../utils/constants'

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default class LectureItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {data} = this.props
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.imgView}>
                    <Image
                        source = {{ uri: data.picture }}
                        style = {{ width:w*.18, height:h*.2, borderRadius:10 }}
                        resizeMode = {'center'}
                    />
                </View>
                <View style={{ marginTop:3, width:250 }}>
                    <Text style={styles.titleStyle} ellipsizeMode={'tail'} numberOfLines={1}>{data.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: MAIN_GRAY,
    },
    imgView: {
        width: w*0.2,
        height: h*.1,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: MAIN_GRAY,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    titleStyle: {
        fontFamily: 'sf-regular',
        fontSize: 20
    }
})