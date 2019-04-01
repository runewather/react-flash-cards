import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer  } from "react-navigation"
import NewCard from './NewCard'

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

    render() {
        return (
            <View style={style.container}>
                <View style={{ marginBottom: 80 }}>
                    <Text style={style.deckTitle}>Does React Native work with Android?</Text>
                </View>                
                <View style={style.buttonsContainer}>
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    title='Correct'
                    onPress={() => null}
                    />
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#A74FBB' }} 
                    title='Incorrect'/>
                </View>                
            </View>
        )
    }
}

export default Quiz