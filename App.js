import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer  } from "react-navigation"

import Home from './components/Home'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

import deckList from './reducers/DeckList'

import { setLocalNotification, clearLocalNotification } from './utils/utils'

const AppNavigator = createStackNavigator({
  Home: Home,
  Deck: Deck,
  NewDeck: NewDeck,
  NewCard: NewCard,
  Quiz: Quiz    
});

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