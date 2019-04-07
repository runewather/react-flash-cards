import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/DeckAction'

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

class NewDeck extends Component {
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
                <View>                
                </View>
            )
        }
    )

    constructor(props) {
        super(props)
        this.state = {
            inputText : ''
        }
    }
    
    handleTextChange = (e) => {
        this.setState({
            inputText: e
        })                      
    }

    addNewDeck = async () => {
        this.props.dispatch(handleAddDeck(this.state.inputText))
        this.props.navigation.navigate('Deck', { deckName: this.state.inputText })
    }

    render() {
        return (
            <View style={style.container}>
                <View>
                    <Text style={{ fontSize: 36, textAlign: 'center', color: '#5353C5' }}>
                        What is the title of your new Deck?
                    </Text>                    
                </View>
                <Input placeholder='Deck Name' value={this.state.inputText} onChangeText={this.handleTextChange}/>
                <View style={ {marginTop: 20} }>
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    onPress={this.addNewDeck}
                    title='Submit'/>
                </View>                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(NewDeck)