import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import { ADD_CARD } from '../actions';
import { ADD_CARD } from '../redux/types';


export default function NewCard(props) {
    const title = props.route.params.title;
    const navigation = props.navigation;
    const dispatch = useDispatch();
// Using a controlled state since this is a controlled component
const [question, setNewAddedQuestion] = useState('');
const [answer, setNewAddedAnswer] = useState('');

const handleQuesInput = answer => {
    setNewAddedQuestion(answer);
};
const handleAnsInput = answer => {
    setNewAddedAnswer(answer);
};

const handleNewlyAddedQuestion = () => {
    const addCardAction = {type: ADD_CARD, payload: {question, answer, title}};
    dispatch(addCardAction); 
    navigation.navigate('Decks');
  };


    return (

        <View>
        <View>
          <TextInput
            mode="flat"
            placeholder="Type your question"
            onChangeText={handleQuesInput}
          />
          <TextInput
            mode="flat"
            placeholder="Type your answer"
            onChangeText={handleAnsInput}
          />
          <View style={styles.buttonWrapper}>
            <Button
              raised
              dark
              theme={{roundness: 6}}
              mode="contained"
              onPress={handleNewlyAddedQuestion}
              style={styles.button}>
              Create question
            </Button>
          </View>
        </View>
      </View>
    )
}





const styles = StyleSheet.create({
    button: {
        marginTop: 490,
        width: '90%'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})