import React, { Component } from 'react'
import LecturesComponent from '../components/LecturesComponent'
import {connect} from 'react-redux'
import {onLectureFetching} from '../actions/LecturesActions'
import NotFoundComponent from '../../../components/status/NotFoundComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'

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