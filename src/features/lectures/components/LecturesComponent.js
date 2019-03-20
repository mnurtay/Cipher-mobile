import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LecturesItem from './LecturesItem'
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
                        <LecturesItem key={value.id} data={value} navigation={this.props.navigation}/>
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: MAIN_BACKGROUND
    }
})