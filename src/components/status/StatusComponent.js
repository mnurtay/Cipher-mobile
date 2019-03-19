import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions
} from 'react-native'

let width = Dimensions.get('window').width


class StatusComponent extends React.Component{
    render(){
        let {imageSource, title} = this.props
        return(
            <View style={styles.holder}>
                <View style={styles.imageHolder}>
                    <Image
                    source= {imageSource}
                    style={styles.image}
                    />
                </View>
                <View style={styles.textHolder}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            </View>
        )
    }
}


export default  StatusComponent;

const styles = StyleSheet.create({
    holder:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
    },
    imageHolder:{
        width: width,
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent:'center'
    },
    image:{
        width: width*0.6,
        height: width*0.6
    },
    textHolder:{
        alignItems: 'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 16,
        color: '#584375',
        fontFamily: 'sf-regular'
    }
})