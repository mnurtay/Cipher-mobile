import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import CiphersContainer from '../features/ciphers/containers/CiphersContainer'

let CipherStack = createStackNavigator(
    {
        Ciphers: {
            screen: CiphersContainer
        },
    },
    {
        initialRouteName: 'Ciphers',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#454456'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: 'sf-medium',
                fontSize: 22
            }
        }
    }
)

export default createAppContainer(CipherStack)