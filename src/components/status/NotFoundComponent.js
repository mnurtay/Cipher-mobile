import React from 'react'
import StatusComponent from './StatusComponent'

export default emptyComponent = ()=>{
    return <StatusComponent
            imageSource = {require('../../../assets/not_found.png')}
            title = {'Простите, ничего не найдено...'}
            />
}