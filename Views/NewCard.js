import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { ADD_CARD } from '../redux/types';
import CardView from '../components/CardView';


const NewCard = (props) => {
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
          <CardView
          handleQuesInput={handleQuesInput}
          handleAnsInput={handleAnsInput}
          handleNewlyAddedQuestion={handleNewlyAddedQuestion}
          />
       
      </View>
    )
};



export default NewCard;




