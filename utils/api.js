import { AsyncStorage } from 'react-native'
import { APP_NAMESPACE } from './common'

import defaultDecks from './defaultValues'

const DECKS_STORAGE_KEY = `${APP_NAMESPACE}:decks`

const fetchDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => {
            return (results ? JSON.parse(results) : defaultDecks)
        })
}

const addOrUpdateDeck = (deck) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => {
            const previousDecks = results ? JSON.parse(results) : {};
            const newDecks = {
                ...decks,
                [deck.title]: deck
            }

            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
        }
    )
}

export { fetchDecks, addOrUpdateDeck }
