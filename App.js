import React, { Component } from 'react'
import { createStackNavigator, createAppContainer  } from "react-navigation"

import Home from './components/Home'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

const AppNavigator = createStackNavigator({
  Home: Home,
  Deck: Deck,
  NewDeck: NewDeck,
  NewCard: NewCard,
  Quiz: Quiz    
});

const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App