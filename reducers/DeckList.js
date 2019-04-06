import { FETCH_DECKS, FETCH_DECK_CARDS } from '../actions/DeckAction'

export default function deckList(state = {}, action) {
    switch(action.type) {
        case FETCH_DECKS:
            return {
                decks: action.decks
            }
        case FETCH_DECK_CARDS: 
            return {
                deck: action.deck
            }
        default:
            return state        
    }
}