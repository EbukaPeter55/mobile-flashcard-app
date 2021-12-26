import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { ADD_NEW_DECK } from '../redux/types';


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
            <View style={style.viewWrapper}>
                <View style={style.textContainer}>
                <Text style={style.title}>What would you love to call your deck?</Text>
                <TextInput 
                style={style.input}
                mode="flat"
                placeholder="Your Deck Name"
                onChangeText={handleDeckCardName}
                />
                </View> 
                <View style={style.buttonContainer}>
                    <Button
                    style={style.buttonStyles}
                    title="submit"
                    raised
                    dark
                    mode="contained"
                    onPress={handleAddNewDeckSubmit}
                    >
                    Submit
                    </Button>
                </View>
            </View>
        </View>
    )
};


export default NewDeck;

const style = StyleSheet.create({
    viewWrapper: {
        marginTop: '3%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        justifyContent: 'center'
    },
    textContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    input: {
        width: '90%',
        height: 50,
        marginTop: '5%'
    },
    buttonContainer: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonStyles: {
        width: '90%',
        marginTop: '138%'
    }
});