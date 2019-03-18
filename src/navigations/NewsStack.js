import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import NewsContainer from '../features/news/containers/NewsContainer'

let NewsStack = createStackNavigator(
    {
        News: {
            screen: NewsContainer
        },
    },
    {
        initialRouteName: 'News',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#30156E'
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

export default createAppContainer(NewsStack)