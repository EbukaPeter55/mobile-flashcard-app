export const GET_DECKS = 'GET_DECKS';
export const ADD_CARD = 'ADD_CARD';

export const getAllDecks = (decks) => {
    return {
      type: GET_DECKS,
      decks
    };
  };