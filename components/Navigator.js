import React from 'react'
import { StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { white, black } from '../utils/colors'
import Decks from './Decks'
import Deck from './Deck'
import AddQuestion from './AddQuestion'
import Quiz from './Quiz'
import AddDeck from './AddDeck'

const navigationOptions = {
    headerTintColor: white,
    headerStyle: { 
        backgroundColor: black 
    }
}

export default StackNavigator(
    {
        Decks: { 
            screen: Decks, 
            navigationOptions
        },
        Deck: { 
            screen: Deck, 
            navigationOptions 
        },
        AddQuestion: { 
            screen: AddQuestion, 
            navigationOptions 
        },
        Quiz: {
            screen: Quiz,
            navigationOptions
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions
        }
    },
    { 
        cardStyle: { 
            backgroundColor: white 
        } 
    }
)