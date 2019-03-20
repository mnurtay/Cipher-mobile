import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onLectureDetailFetching} from '../actions/LectureDetailActions'
import LectureDetailComponent from '../components/LectureDetailComponent'
import NotFoundComponent from '../../../components/status/NotFoundComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'
import { ActivityIndicator, View } from 'react-native'
import {MAIN_COLOR_3} from '../../../utils/constants'

class LectureDetailContainer extends Component{
    static navigationOptions = ({ navigation }) => {
        return{
            title: 'Detail Lecture',
        }
    }

    componentDidMount(){
        const id = this.props.navigation.getParam('lectureId')
        this._refresh(id)
    }

    _refresh = (id) => {
        this.props._on_lecture_fetching(id)
    }

    render(){
        let { lecture, isError, lectureLoading } = this.props.LectureDetailReducers
        let output = (<LectureDetailComponent
                        data={lecture}
                        navigation={this.navigation}
                        _refresh={this._refresh}
                    />)
        if(!lectureLoading && lecture.length===0)
            output = <NotFoundComponent/>
        if(isError)
            output = <ErrorComponent/>
        if(lectureLoading)
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
        LectureDetailReducers: state.LectureDetailReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _on_lecture_fetching: async(id) => {
            await dispatch(await onLectureDetailFetching(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureDetailContainer)