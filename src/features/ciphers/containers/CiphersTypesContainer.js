import React, { Component } from 'react'
import CipherTypes from '../components/CipherTypes'
import {connect} from 'react-redux'
import {onCiphersTypesFetching} from '../actions/CiphersTypesActions'
import NotFoundComponent from '../../../components/status/NotFoundComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'
import Holder from '../../../components/general/HolderComponent'

class CiphersTypesContainer extends Component{
    static navigationOptions = {
        headerTitle: 'Cipher',
        headerTitleStyle: {
            fontFamily: 'sf-medium'
        }
    }

    componentDidMount(){
        this._refresh()
    }

    _refresh = () => {
        this.props._on_cipherTypes_fetching()
    }
    
    render(){
        let {cipherTypes, isLoading, isError} = this.props.CiphersTypesReducers
        output = (<CipherTypes
                    navigation={this.props.navigation}
                    data={cipherTypes}
                    _refresh={this._refresh}
                />)
        if(!isLoading && cipherTypes.length===0)
            output = <NotFoundComponent/>
        if(isError)
            output = <ErrorComponent/>
        return(
            <Holder isLoading={isLoading}>
                {output}
            </Holder>
        )
    }
}


const mapStateToProps = state => {
    return {
        CiphersTypesReducers: state.CiphersTypesReducers
    }
}

const mapDispatchToProps = dispatch => {
    return{
        _on_cipherTypes_fetching: async() => {
            await dispatch(await onCiphersTypesFetching())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CiphersTypesContainer)