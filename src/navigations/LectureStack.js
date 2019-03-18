import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import LecturesContainer from '../features/lectures/containers/LecturesContainer'

let LectureStack = createStackNavigator(
    {
        Lectures: {
            screen: LecturesContainer
        },
    },
    {
        initialRouteName: 'Lectures',
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

export default createAppContainer(LectureStack)