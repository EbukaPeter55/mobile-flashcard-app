import {createSlice} from '@reduxjs/toolkit';

//create date for the next day
const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);

const previousState = {
  firstTimeOpeningApp: true,
  lastPlayedQuizDate: `${new Date()}`,
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'React store is what?',
          answer: 'A single source of truth for managing state and data',
        },
        {
          question: 'ComponentDidMount is same as useEffect hooks?',
          answer: 'True',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a tenary operator?',
          answer: 'An operator in Javascript Es6 used for writing condition statements, just like an if else statement',
        },
      ],
    },
  },
};

// Using Create slice from redux-tool kit
const appSlice = createSlice({
  name: 'app',
  previousState,
  reducers: {},
  extraReducers: {
    ADD_CARD: (state, action) => {
      const {title, question, answer} = action.payload;
      state.decks[title] = {
        title,
        questions: [...state.decks[title].questions, {question, answer}],
      };
    },
    ADD_NEW_DECK: (state, action) => {
      const {title} = action.payload;
      state.decks[title] = {
        title,
        questions: [],
      };
    },
    DELETE_DECK: (state, action) => {
      const {title} = action.payload;
      delete state.decks[title];
    },
  },
});

export default appSlice.reducer;
