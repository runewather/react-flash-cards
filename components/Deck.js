import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleFetchDeckCards } from '../actions/DeckAction'

const style = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',   
        textAlign: 'center',
        justifyContent: 'center'             
    },
    deckTitle: {
        textAlign: 'center',
        fontSize: 36,
        color: '#5353C5'
    },
    deckSubTitle: {
        textAlign: 'center',
        fontSize: 26,
        color: '#4F6BBB'
    },
    buttonsContainer: {
        width: '60%',
    },
}

class Deck extends Component {      
    static navigationOptions = ( { navigation } ) => (
        {
            title: navigation.getParam('deckName'),
            headerStyle: {
                backgroundColor: '#6b52ae'
            },
            headerTintColor: 'white',
            headerTitleStyle: { 
                textAlign: 'center', 
                flex:1 
            },
            headerRight: (
                <View></View>
            )
        }
    )

    componentDidMount() {
        this.props.navigation.addListener(
            'willFocus',
            () => {
                this.props.dispatch(handleFetchDeckCards(this.props.navigation.getParam('deckName')))     
            }
        )            
    }

    render() {   
        return (
            <View style={style.container}>
                <View style={{ marginBottom: 80 }}>
                    <Text style={style.deckTitle}>{ this.props.navigation.getParam('deckName') }</Text>
                    <Text style={style.deckSubTitle}>{ Object.keys(this.props.deck).length } Cards</Text>
                </View>                
                <View style={style.buttonsContainer}>
                    { Object.keys(this.props.deck).length > 0 ? 
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#A74FBB' }} 
                    title='Start Quiz'
                    onPress={() => this.props.navigation.navigate('Quiz', { deck: this.props.deck })}
                    /> : null}
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    title='Add Card'
                    onPress={() => this.props.navigation.navigate('NewCard', { deckName : this.props.navigation.getParam('deckName') })}
                    />                    
                </View>                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    deck: {
        ...state.deck
    }
})

export default connect(mapStateToProps)(Deck)