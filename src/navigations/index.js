import React, { Component } from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import LectureStack from './LectureStack'
import CipherStack from './CipherStack'

const AppBottomBar = createBottomTabNavigator(
    {
        LectureBar: LectureStack,
        CipherBar: CipherStack
    },
    {
        initialRouteName: 'LectureBar',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'LectureBar')
                    iconName = 'ios-bookmarks'
                else if (routeName === 'CipherBar')
                    iconName = 'ios-calculator'
                return <IconComponent name={iconName} size={25} color={tintColor}/>
            }
        }),
        tabBarOptions: {
            activeTintColor: '#4D65FF',
            inactiveTintColor: '#bbbbbb',
            showLabel: false,
            style: {
                backgroundColor: 'white'
            }
        }
    }
)

export default createAppContainer(AppBottomBar);