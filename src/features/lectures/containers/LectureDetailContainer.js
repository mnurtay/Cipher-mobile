import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onLectureDetailFetching} from '../actions/LectureDetailActions'
import LectureDetailComponent from '../components/LectureDetailComponent'
import NotFoundComponent from '../../../components/status/NotFoundComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'

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