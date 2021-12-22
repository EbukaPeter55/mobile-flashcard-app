import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';



export default function NewCard(props) {
    const title = props.route.params.title;
    const navigation = props.navigation;
    const dispatch = useDispatch();
// Using a controlled state since this is a controlled component
const [question, setNewQuestion] = useState('');
const [answer, setNewAnswer] = useState('');

const handleQuesInput = answer => {
    setNewQuestion(answer);
};
const handleAnsInput = answer => {
    setNewAnswer(answer);
};

const handleNewCardSubmission = () => {
    const action = {type: 'ADD_CARD', payload: {question, answer, title}};
    dispatch(action); 
    navigation.navigate('Decks');
  };


    return (

        <View>
        <View>
          <TextInput
            mode="flat"
            placeholder="Enter Question"
            onChangeText={handleQuesInput}
          />
          <TextInput
            mode="flat"
            placeholder="Enter Answer"
            onChangeText={handleAnsInput}
          />
          <View style={styles.buttonContainer}>
            <Button
              raised
              dark
              theme={{roundness: 6}}
              mode="contained"
              onPress={handleNewCardSubmission}
              style={styles.button}>
              Submit
            </Button>
          </View>
        </View>
      </View>
    )
}





const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
        width: '30%'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})