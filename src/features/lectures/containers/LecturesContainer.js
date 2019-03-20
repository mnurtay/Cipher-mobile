import React, { Component } from 'react'
import LecturesComponent from '../components/LecturesComponent'
import {connect} from 'react-redux'
import {onLectureFetching} from '../actions/LecturesActions'
import NotFoundComponent from '../../../components/status/NotFoundComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'
import { ActivityIndicator, View } from 'react-native'
import {MAIN_COLOR_3} from '../../../utils/constants'

class LecturesContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Lectures',
        }
    }

    componentDidMount(){
        this._refresh()
    }

    _refresh = () => {
        this.props._on_lectures_fetching()
    }

    render(){
        let { lectures, isError, lecturesLoading } = this.props.LecturesReducers
        let output = (<LecturesComponent
                        data={lectures}
                        navigation={this.props.navigation}
                        _refresh={this._refresh}
                    />)
        if(!lecturesLoading && lectures.length===0)
            output = <NotFoundComponent/>
        if(isError)
            output = <ErrorComponent/>
        if(lecturesLoading)
            output = (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={'large'} color={MAIN_COLOR_3}/>
                </View>
            )
        return output
    }
}

const mapStateToProps = state => {
    return {
        LecturesReducers: state.LecturesReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _on_lectures_fetching: async() => {
            await dispatch(await onLectureFetching())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturesContainer)