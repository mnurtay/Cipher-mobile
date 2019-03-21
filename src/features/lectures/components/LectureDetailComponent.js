import React, {Component} from 'react'
import { StyleSheet, ScrollView, Dimensions, View, Text, Linking } from 'react-native'
import HTML from 'react-native-render-html'
import { Button } from 'react-native-elements'
import { MAIN_COLOR_3, MAIN_GRAY } from '../../../utils/constants';

export default class LectureDetailComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {data} = this.props
        form = unescape(data.form)
        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Button
                        title={'Watch video'}
                        titleStyle={{ color: '#000', fontFamily: 'sf-light', fontSize: 15 }}
                        buttonStyle={{
                            backgroundColor: '#fff',
                            borderWidth: 0.5,
                            borderColor: MAIN_COLOR_3,
                            borderRadius: 10,
                            height: 30
                        }}
                        containerStyle={{ borderRadius: 10 }}
                        onPress={() => Linking.openURL(data.video)}
                    />
                </View>
                <HTML html={form} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingBottom: 10,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        borderColor: MAIN_GRAY
    },
    title: {
        fontFamily: 'sf-medium',
        fontSize: 19
    }
})