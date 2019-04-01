import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Text, ScrollView, AsyncStorage } from 'react-native'
import { Card, Icon } from 'react-native-elements'

class Home extends Component {   
    async componentDidUpdate() {
        let decks = await AsyncStorage.getItem('deckList')
        console.log(decks)
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
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Deck') }>
                        <Card title='Deck Name' titleStyle={ {color: '#4F6BBB'} }>
                            <View style={ { alignItems: 'center'} }>
                                <Text style={{ color: '#5353C5' }}>45 Cards</Text>
                            </View>                            
                        </Card>
                    </TouchableWithoutFeedback> 
                </ScrollView>                            
            </View>
        )
    }
}
  
export default Home