import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleAddCard, handleFetchDeckCards } from '../actions/DeckAction'

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

class NewCard extends Component { 
    static navigationOptions = ( { navigation } ) => (
        {
            title: 'NEW CARD',
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
            questionText : '',
            answerText: ''
        }
    }
    
    addNewCard = () => {
        if(this.state.questionText != "" && this.state.answerText != "") {
            card = {}
            card.question = this.state.questionText
            card.answer = this.state.answerText
            const deckName = this.props.navigation.getParam('deckName')
            this.props.dispatch(handleAddCard(deckName, card))
            this.props.navigation.goBack()
        }
    }

    handleQuestionInput = (e) => {
        this.setState({
            questionText: e
        })  
    }

    handleAnswerInput = (e) => {
        this.setState({
            answerText: e
        })  
    }

    render() {       
        return (
            <View style={style.container}>
                <View>
                    <Text style={{ fontSize: 36, textAlign: 'center', color: '#5353C5' }}>
                        Question:
                    </Text>                    
                </View>
                <Input placeholder='Question' onChangeText={ this.handleQuestionInput }/>
                <Input placeholder='Answer' onChangeText={ this.handleAnswerInput }/>
                <View style={ {marginTop: 20} }>
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    title='Submit'
                    onPress={ this.addNewCard } />
                </View>                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(NewCard)

