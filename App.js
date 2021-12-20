import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './Views';


const persistor = persistStore(store);


const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow'
  },
};

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <PaperProvider theme={theme}>
        <MainComponent />
      </PaperProvider>
    </PersistGate>
  </Provider>

  );
}


export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
