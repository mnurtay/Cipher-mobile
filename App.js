import React from 'react';
import {Font} from 'expo';
import { Text, View, StyleSheet } from 'react-native';
import Holder from './src/components/general/HolderComponent'
import Router from './src/navigations'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { fontloaded: false }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'sf-regular': require('./assets/fonts/SFProText-Regular.ttf'),
      'sf-light': require('./assets/fonts/SFProText-Light.ttf'),
      'sf-medium': require('./assets/fonts/SFProText-Medium.ttf'),
      'sf-bold': require('./assets/fonts/SFProText-Bold.ttf'),
    });
    this.setState({ fontloaded: true })
  }
  render() {
    return (
      <Holder isLoading={!this.state.fontloaded}>
        <Router />
      </Holder>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})