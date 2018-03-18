import { StackNavigator } from 'react-navigation'

import { white, black } from '../utils/colors'
import Decks from './Decks'
import Deck from './Deck'
import AddQuestion from './AddQuestion'

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
        }
    },
    { 
        cardStyle: { 
            backgroundColor: white 
        } 
    }
)