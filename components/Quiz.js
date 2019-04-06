import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { clearLocalNotification } from '../utils/utils'

const style = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',   
        textAlign: 'center',
        justifyContent: 'center'             
    },
    question: {
        textAlign: 'center',
        fontSize: 36,
        color: '#5353C5'
    },
    answer: {
        textAlign: 'center',
        fontSize: 36,
        color: 'red'
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

class Quiz extends Component {   
    static navigationOptions = ( { navigation } ) => (
        {
            title: 'DECK NAME',
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

    constructor(props) {
        super(props)
        this.state = {
            cardIndex: 0,
            deck: null,
            answered: false,
            correct: 0
        }
    }

    componentDidMount() {
        this.setState({ 
            cardIndex : 0, 
            answered : false, 
            correct : 0 
            })
    }

    showOptions() {
        if(this.state.cardIndex == Object.keys(this.state.deck).length) {
            clearLocalNotification()
            return (
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginBottom: 60 }}>
                        <Text style={style.question}>You've finished the quiz!</Text>
                        <Text style={style.answer}>Questions correct: {this.state.correct}</Text>                                       
                    </View>
                    <View style={style.buttonsContainer}>
                        <Button type="outline" 
                        buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#A74FBB' }} 
                        title='Try again!'
                        onPress={() => this.setState({ 
                            cardIndex : 0, 
                            answered : false, 
                            correct : 0 
                            })}
                        />
                        <Button type="outline" 
                        buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#A74FBB' }} 
                        title='Back to Deck'
                        onPress={() => this.props.navigation.goBack()}
                        />
                    </View> 
                </View>
            )
        } else if(Object.keys(this.state.deck).length >= this.state.cardIndex && this.state.answered == true) {
            return (
                <View style={style.buttonsContainer}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={style.answer}>{ this.state.deck[this.state.cardIndex].answer }</Text>
                    </View>
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    title='Correct'
                    onPress={() => this.setState({ 
                        cardIndex : this.state.cardIndex + 1, 
                        answered : false, 
                        correct: this.state.correct + 1 
                        })}
                    />
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#A74FBB' }} 
                    title='Incorrect'
                    onPress={() => this.setState({ 
                        cardIndex : this.state.cardIndex + 1, 
                        answered : false,  
                        })}
                    />
                </View>
            )
        } else if(this.state.answered == false) {
            return (
                <View>
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    title='Show Answer'
                    onPress={() => this.setState({ answered : true })}
                    />
                </View>
            )
        }
    }

    componentDidMount() {
        this.setState({
            deck : this.props.navigation.getParam('deck')
        })  
    }

    render() {
        return (
            <View style={style.container}>
                <Text></Text>
                <View style={{ marginBottom: 20 }}>
                    <Text style={style.question}>{this.state.deck != null 
                    && Object.values(this.state.deck)[this.state.cardIndex] != undefined 
                    ? Object.values(this.state.deck)[this.state.cardIndex].question : null}</Text>
                </View>                
                { this.state.deck != null ? this.showOptions() : null }              
            </View>
        )
    }
}

export default Quiz