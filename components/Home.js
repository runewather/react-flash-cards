import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Text, ScrollView, AsyncStorage } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleFetchDecks } from '../actions/DeckAction'
import { generateUID } from '../utils/utils'

class Home extends Component {   

    componentDidMount() {  
        this.props.navigation.addListener(
            'willFocus',
            () => {
                this.props.dispatch(handleFetchDecks()) 
            }
        );    
    }

    showDeckList = (decks) => {
        return Object.keys(decks).map((deckName) => {
            return (
                <TouchableWithoutFeedback key={generateUID()} onPress={() => this.props.navigation.navigate('Deck', { deckName : deckName }) }>
                    <Card title={deckName} titleStyle={ {color: '#4F6BBB'} }>
                        <View style={ { alignItems: 'center'} }>
                            <Text style={{ color: '#5353C5' }}>{ decks[deckName] != null ? decks[deckName].length : null} Cards</Text>
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
            <View style={{ marginBottom : 15 }} >
                <ScrollView>
                    { this.showDeckList(this.props.decks) }
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