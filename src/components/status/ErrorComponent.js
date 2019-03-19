import React from 'react'
import StatusComponent from './StatusComponent'

export default errorComponent = ()=>{
    return <StatusComponent
            imageSource = {require('../../../assets/error.png')}
            title = {'Woops, проверьте интернет-соединение ...'}
            />
}