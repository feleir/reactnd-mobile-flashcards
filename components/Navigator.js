import { StackNavigator } from 'react-navigation'

import { white, black } from '../utils/colors'
import Decks from './Decks';

const navigationOptions = {
    headerTintColor: white,
    headerStyle: { 
        backgroundColor: black 
    }
}

export default StackNavigator(
    {
        Decks: { screen: Decks, navigationOptions }
    },
    { 
        cardStyle: { 
            backgroundColor: white 
        } 
    }
)