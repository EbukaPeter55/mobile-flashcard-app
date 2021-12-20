import {createSlice} from '@reduxjs/toolkit';

//create date for the next day
const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);

const initialState = {
  firstTimeOpeningApp: true,
  showNotification: true,
  notificationShowTime: `${nextDay}`,
  lastPlayedQuizDate: `${new Date()}`,
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
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
    SET_NOTIFICATION_TIME: (state, action) => {
      const {time, firstTimeOpeningApp} = action.payload;
      state.notificationShowTime = time;
      state.firstTimeOpeningApp = firstTimeOpeningApp;
    },
    SET_SHOW_NOTIFICATION: (state, action) => {
      console.log('action -->', action);
      const {showNotification} = action.payload;
      if (action.payload?.payQuizDate) {
        state.lastPlayedQuizDate = action.payload?.payQuizDate;
      }
      state.showNotification = showNotification;
    },
  },
});

export default appSlice.reducer;
