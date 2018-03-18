import { ADD_OR_UPDATE_DECK, RECEIVE_DECKS } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks
    case ADD_OR_UPDATE_DECK:
      const { deck } = action
      const { title } = deck
      return {
          ...state,
          [title]: deck
      }
    default:
      return state;
  }
}

export default decks