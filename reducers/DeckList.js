import { FETCH_DECKS, ADD_DECK } from '../actions/DeckAction'

export default function deckList(state = {}, action) {
    switch(action.type) {
        case FETCH_DECKS:
            return {
                decks: action.decks
            }
        default:
            return state        
    }
}