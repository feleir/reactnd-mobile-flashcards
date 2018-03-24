import { GET_DECKS, 
  GET_DECK, 
  ADD_CARD_TO_DECK, 
  ADD_DECK, 
  DELETE_DECK } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
    case DELETE_DECK:
      return action.decks
    case GET_DECK:
    case ADD_DECK:
    case ADD_CARD_TO_DECK:
      const { deck } = action
      const { title } = deck
      return {
          ...state,
          [title]: deck
      }
    default:
      return state
  }
}

export default decks