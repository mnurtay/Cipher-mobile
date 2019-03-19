import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LectureItem from './LectureItem'
import { MAIN_BACKGROUND } from '../../../utils/constants';

export default class LecturesComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {data} = this.props
        return(
            <ScrollView style={styles.scrollView}>
                {
                    data.map((value) => (
                        <LectureItem key={value.id} data={value}/>
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        padding: 10,
        backgroundColor: MAIN_BACKGROUND
    }
})