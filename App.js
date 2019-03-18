import React from 'react';
import {Font} from 'expo';

// COMPONENTS
import Holder from './src/components/general/HolderComponent'
import Router from './src/navigations'

// REDUX
import Reducers from './src/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middlewares = applyMiddleware(thunk)
const store = createStore(Reducers, middlewares)

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
      <Provider store={store}>
        <Holder isLoading={!this.state.fontloaded}>
          <Router />
        </Holder>
      </Provider>
    );
  }
}
