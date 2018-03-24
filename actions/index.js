import * as api from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export function getDecks() {
    return dispatch => {
        return api.getDecks()
            .then(decks => {
                dispatch({
                    type: GET_DECKS,
                    decks
                })
            })
    }
}

export function getDeck() {
    return dispatch => {
        return api.getDeck()
            .then(deck => {
                dispatch({
                    type: GET_DECK,
                    deck
                })
            })
    }
}

export function addCardToDeck(question) {
    return dispatch => {
        return api.addCardToDeck(question)
            .then((deck) => {
                dispatch({
                    type: ADD_CARD_TO_DECK,
                    deck
                })
            })
    }
}

export function addDeck(title) {
    return dispatch => {
        return api.addDeck(title)
            .then((deck) => {
                dispatch({
                    type: ADD_DECK,
                    deck
                })
            })
    }
}

export function deleteDeck(title) {
    return dispatch => {
        return api.deleteDeck(title)
            .then((decks) => {
                dispatch({
                    type: DELETE_DECK,
                    decks
                })
            })
    }
}