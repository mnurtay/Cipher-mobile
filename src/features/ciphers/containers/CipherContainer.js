import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onCiphersFetching} from '../actions/CiphersActions'
import Holder from '../../../components/general/HolderComponent'
import NotFoundComponent from '../../../components/status/NotFoundComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'
import CipherComponent from '../components/CipherComponent'

class CipherContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let cipherType = this.props.navigation.getParam('cipherType')
        this._refresh(cipherType.id)
    }

    _refresh = (id) => {
        this.props._on_ciphers_fetching(id)
    }

    render(){
        let {ciphers, isLoading, isError} = this.props.CiphersReducers
        let cipherType = this.props.navigation.getParam('cipherType')
        output = (
            <CipherComponent
                navigation={this.props.navigation}
                ciphers={ciphers}
                cipherType={cipherType}
                _refresh={this._refresh}
            />
        )
        if(!isLoading && ciphers.length===0)
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
        CiphersReducers: state.CiphersReducers
    }
}

const mapDispatchToProps = dispatch => {
    return{
        _on_ciphers_fetching: async(id) => {
            await dispatch(await onCiphersFetching(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CipherContainer)