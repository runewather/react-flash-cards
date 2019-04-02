import { AsyncStorage } from 'react-native'

export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'
const DECK_LIST_STORAGE = 'DECK_LIST'

function fetchDecksAction(decks) {
    return {
        type: FETCH_DECKS,
        decks
    }
}

export function handleFetchDecks() {
    return async (dispatch) => {
        const decks = await AsyncStorage.getItem(DECK_LIST_STORAGE)
        if(decks != null)            
            dispatch(fetchDecksAction(JSON.parse(decks)))
    }
}

export function handleAddDeck(deckName) {
    return async (dispatch) => {
        let deck = {}
        deck[deckName] = {
            deckName: deckName,
            cards: []
        }        
        await AsyncStorage.mergeItem(DECK_LIST_STORAGE, JSON.stringify(deck))
        dispatch(handleFetchDecks())
    }
}
