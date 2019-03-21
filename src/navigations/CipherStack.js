import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import CiphersTypesContainer from '../features/ciphers/containers/CiphersTypesContainer'
import CipherContainer from '../features/ciphers/containers/CipherContainer'
import { MAIN_COLOR_3 } from '../utils/constants'

let CipherStack = createStackNavigator(
    {
        Ciphers: {
            screen: CiphersTypesContainer
        },
        Cipher: {
            screen: CipherContainer
        }
    },
    {
        initialRouteName: 'Ciphers',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: MAIN_COLOR_3
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: 'sf-regular',
                fontSize: 22,
                letterSpacing: 0.5
            }
        }
    }
)

export default createAppContainer(CipherStack)