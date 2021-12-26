import { GET_DECKS } from "../actions";



const decks = (state = {}, action) => {
    switch (action.type) {
      case GET_DECKS:
        return {
            ...state,
          ...action.decks
        };
    }
  };
  export default decks;
  