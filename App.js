import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer  } from "react-navigation"

import deckList from './reducers/DeckList'

import { setLocalNotification, clearLocalNotification } from './utils/utils'
import { routes } from './utils/routes'

const AppNavigator = createStackNavigator(routes);

const AppContainer = createAppContainer(AppNavigator)

const store = createStore(deckList, applyMiddleware(thunk))

class App extends Component {

  componentDidMount() {
    clearLocalNotification()
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>     
    )
  }
}

export default App