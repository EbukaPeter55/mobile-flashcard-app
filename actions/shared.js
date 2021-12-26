import { getAllDecks } from "./index";
import {
    removeDeck,
    addCardToDeck,
    getDecks,
    saveDeckTitle
  } from "../utils/helpers";
  
  export const handleInitialData = () => {
    return (dispatch) => {
      return getDecks().then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };

  export const handleAddQuestionToDeck = (title, card) => {
    return (dispatch) => {
      return addCardToDeck(title, card).then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };

  // export const handleAddQuestionToDeck = {
  //   type: 'ADD_CARD', 
  //   payload: {
  //     question, answer, title
  //   }
  // };

  export const handleCreateNewDeck = (title) => {
    return (dispatch) => {
      return saveDeckTitle(title).then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };

  export const handleDeleteDeck = (key) => {
    return (dispatch) => {
      return removeDeck(key).then((decks) => {
        dispatch(getAllDecks(decks));
      });
    };
  };
  