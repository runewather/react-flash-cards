import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Text, ScrollView, AsyncStorage } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleFetchDecks } from '../actions/DeckAction'

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

class Home extends Component {   
    componentDidMount() {
        this.props.dispatch(handleFetchDecks())       
    }

    showDeckList = () => {
        return Object.values(this.props.decks).map((deck) => {
            return (
                <TouchableWithoutFeedback key={generateUID()} onPress={() => this.props.navigation.navigate('Deck') }>
                    <Card title={deck.deckName} titleStyle={ {color: '#4F6BBB'} }>
                        <View style={ { alignItems: 'center'} }>
                            <Text style={{ color: '#5353C5' }}>{ deck.cards.length } Cards</Text>
                        </View>                            
                    </Card>
                </TouchableWithoutFeedback>
            )
        })
    }

    static navigationOptions = ( { navigation } ) => (
        {
            title: 'FLASH CARDS',
            headerStyle: {
                backgroundColor: '#6b52ae'
            },
            headerTintColor: 'white',
            headerTitleStyle: { 
                textAlign: 'center', 
                flex:1 
            },
            headerRight: (
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('NewDeck') }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Icon name='plus'
                        color='white'
                        type='font-awesome'/>
                    </View>
                </TouchableWithoutFeedback>
            ),
            headerLeft: (
                <View>                
                </View>
            )
        }
    )

    render() {
        return (            
            <View style={{ marginBottom : 15 }}>
                <ScrollView>
                    { this.showDeckList() }
                </ScrollView>                            
            </View>
        )
    }
}
  
const mapStateToProps = state => ({
    decks: {
        ...state.decks
    }
})

export default connect(mapStateToProps)(Home)