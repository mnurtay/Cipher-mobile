import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { MAIN_GRAY } from '../../../utils/constants'
import ImageHolder from '../../../components/general/ImageHolder'

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default class LectureItem extends Component{
    constructor(props){
        super(props)
    }

    _onPress = () => {
        let {id} = this.props.data
        this.props.navigation.navigate('LectureDetail', {lectureId: id})
    }

    render(){
        let {data} = this.props
        return(
            <TouchableOpacity style={styles.container} activeOpacity={.7} onPress={()=>this._onPress()}>
                <View style={styles.imgView}>
                    <ImageHolder
                        url = {data.picture}
                        ratio = {0.85}
                    />
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.titleStyle}>{data.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: MAIN_GRAY,
        marginBottom: 20
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        fontFamily: 'sf-regular',
        fontSize: 19
    },
    titleView: {
        marginTop: 5,
        marginLeft: 5
    }
})