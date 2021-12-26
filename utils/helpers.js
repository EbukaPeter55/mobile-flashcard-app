// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const DECK_DB_KEY = "Ebuka:Flashcards_Deck";

// export const getDecks = async () => {
//   const decks = await AsyncStorage.getItem(DECK_DB_KEY);
//   return JSON.parse(decks);
// };

// export const getDeck = async (key) => {
//   const decks = await AsyncStorage.getItem(DECK_DB_KEY);
//   const json = JSON.parse(decks);
//   return json[key];
// };

// export const removeDeck = async (key) => {
//   const decks = await AsyncStorage.getItem(DECK_DB_KEY);
//   let data = JSON.parse(decks);
//   data[key] = undefined;
//   delete data[key];
//   await AsyncStorage.setItem(DECK_DB_KEY, JSON.stringify(data));
//   return await getDecks();
// };

// export const clearAll = async () => {
//   await AsyncStorage.clear();
// };

// export const saveDeckTitle = async (title) => {
//   const deckProperties = {
//     [title]: {
//       title: title,
//       questions: []
//     }
//   };

//   await AsyncStorage.mergeItem(DECK_DB_KEY, JSON.stringify(deckProperties));
//   return await getDecks();
// };

// export const addCardToDeck = async (title, card) => {
//   const deck = await AsyncStorage.getItem(DECK_DB_KEY);
//   let data = JSON.parse(deck);
//   data[title].questions.push(card);
//   await AsyncStorage.setItem(DECK_DB_KEY, JSON.stringify(data));

//   return await getDecks();
// };



export const computePercentage = (value, total) => {
    if (value === 0 || total === 0) {
      return 0;
    }
    return Math.round((value / total) * 100);
  };
  