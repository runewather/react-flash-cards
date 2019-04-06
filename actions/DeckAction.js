import { AsyncStorage } from 'react-native'

export const FETCH_DECKS = 'FETCH_DECKS'
export const FETCH_DECK_CARDS = 'FETCH_DECK_CARDS'

const DECK_LIST = 'DECK_LIST'

function fetchDecksAction(decks) {
    return {
        type: FETCH_DECKS,
        decks
    }
}

function fetchDeckCardsAction(deck) {
    return {
        type: FETCH_DECK_CARDS,
        deck
    }
}

export function handleAddCard(deckName, card) {
    return async (dispatch) => {
        let decks = await AsyncStorage.getItem(DECK_LIST)
        decks = JSON.parse(decks)
        decks[deckName].push(card)
        await AsyncStorage.setItem(DECK_LIST, JSON.stringify(decks))
        dispatch(handleFetchDeckCards(deckName))
    }
}

export function handleFetchDeckCards(deckName) {
    return async (dispatch) => {
        let decks = await AsyncStorage.getItem(DECK_LIST)
        if(decks != null)            
            decks = JSON.parse(decks)
            let deck = decks[deckName]
            dispatch(fetchDeckCardsAction(deck))
    }
}

export function handleFetchDecks() {
    return async (dispatch) => {
        const decks = await AsyncStorage.getItem(DECK_LIST)
        if(decks != null)            
            dispatch(fetchDecksAction(JSON.parse(decks)))
    }
}

export function handleAddDeck(deckName) {
    return async (dispatch) => {
        let deck = {}
        deck[deckName] = []
        await AsyncStorage.mergeItem(DECK_LIST, JSON.stringify(deck))
        dispatch(handleFetchDecks())
    }
}
