import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { ADD_NEW_DECK } from '../redux/types';
import DeckView from '../components/DeckView';


const NewDeck = ({navigation}) => {
    const dispatch = useDispatch();
    const [deckCardName, setDeckCardName] = useState('');
  
    const handleDeckCardName = deckCardName => {
        setDeckCardName(deckCardName);
    };
    const handleAddNewDeckSubmit = () => {
      dispatch({type: ADD_NEW_DECK, payload: {title: deckCardName}});
      navigation.navigate('Decks');
    };

    return (
        <View>
            {/* Passed the methods as props to our deckView component */}
            <DeckView
            handleAddNewDeckSubmit={handleAddNewDeckSubmit}
            handleDeckCardName={handleDeckCardName}
            />
        </View>
    )
};


export default NewDeck;

