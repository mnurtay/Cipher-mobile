import React, {Component} from 'react'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import HTML from 'react-native-render-html'

export default class LectureDetailComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {form} = this.props.data
        form = unescape(form)
        return(
            <ScrollView style={{ flex: 1 }}>
                <HTML html={form} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        )
    }
}