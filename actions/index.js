import * as api from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_OR_UPDATE_DECK = 'ADD_OR_UPDATE_DECK'

export function fetchDecks() {
    return dispatch => {
        return api.fetchDecks()
            .then(decks => {
                dispatch({
                    type: RECEIVE_DECKS,
                    decks
                })
            })
    }
}

export function addOrUpdateDeck(deck) {
    return dispatch => {
        return api.addOrUpdateDeck(deck)
            .then(() => {
                dispatch({
                    type: ADD_OR_UPDATE_DECK,
                    deck
                })
            })
    }
}