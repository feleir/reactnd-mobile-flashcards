import { AsyncStorage } from 'react-native'
import { APP_NAMESPACE } from './common'

import defaultDecks from './defaultValues'

const DECKS_STORAGE_KEY = `${APP_NAMESPACE}:decks`

const getDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => {
            if (results) {
                return JSON.parse(results)
            }

            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(defaultDecks))

            return defaultDecks
        })
}

const getDeck = (title) => {
    return getDecks().then((decks) => decks[title])
}

const addDeck = (title) => {
    const deck = {
        title: title,
        questions: []
    }

    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({ [title]:deck }))
        .then(() => getDeck(title))
}

const deleteDeck = (title) => {
    return getDecks()
        .then((decks) => {
            delete decks[title]
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))

            return decks
        })
}

const addCardToDeck = (card) => {
    const { title, question, answer } = card

    return getDeck(title)
        .then((deck) => {
            deck.questions.push({ question, answer })
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({ [title]:deck }))

            return deck
        })
}


export { getDecks, getDeck, addDeck, addCardToDeck, deleteDeck }


