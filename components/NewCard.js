import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'

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

export default class NewCard extends Component { 
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
    render() {
        return (
            <View style={style.container}>
                <View>
                    <Text style={{ fontSize: 36, textAlign: 'center', color: '#5353C5' }}>
                        Question:
                    </Text>                    
                </View>
                <Input placeholder='Question'/>
                <Input placeholder='Answer'/>
                <View style={ {marginTop: 20} }>
                    <Button type="outline" 
                    buttonStyle={{ marginBottom: 10, backgroundColor: 'white', borderColor: '#9153C5' }} 
                    title='Submit'/>
                </View>                
            </View>
        )
    }
}

