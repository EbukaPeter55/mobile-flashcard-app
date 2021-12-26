import React, {useState, useEffect } from 'react';
import { View,  StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import {
    Button,
    Text,
    Card,
    Paragraph,
    Dialog,
    Portal,
    Divider,
  } 
  from 'react-native-paper';
import { computePercentage } from '../utils/helpers';
import { setLocalNotification, clearLocalNotification } from '../utils/notifications';
import QuizView from '../components/QuizView';

const Quiz = (props) => {
  useEffect (()=>{
    clearLocalNotification().then(setLocalNotification);
  })

  const title = props.route.params.title;
  // const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const questions = useSelector(state => state.decks[title].questions);
  const totalQuestions = questions.length;

  const [Answer, setAnswer] = useState(
    questions[questionIndex] && questions[questionIndex]['question'],
  );

  const handleShowAnswer = answer => {
    if (answer === 'answer') {
      setAnswer(questions[questionIndex] && questions[questionIndex]['answer']);
      setShowQuestion(true);
      clearLocalNotification()
      .then(()=> setLocalNotification())
    } else {
      setAnswer(
        questions[questionIndex] && questions[questionIndex]['question'],
      );
      setShowQuestion(false);
    }
  };
  
  const manageClick = correctness => {
    if (questionIndex <= totalQuestions - 1) {
      if (correctness === 'correct') {
        setCorrectAnswers(correctAnswers + 1);
        setQuestionIndex(questionIndex + 1);
        clearLocalNotification()
        .then(()=> setLocalNotification())
      } else {
        setQuestionIndex(questionIndex + 1);
      }
      if (questionIndex === totalQuestions - 1) {
        setShowFinalMessage(true);
      }
    }
  };
  const restartQuestion = () => {
    setCorrectAnswers(0);
    setQuestionIndex(0);
    setShowQuestion(true);
    setShowFinalMessage(false);
    setAnswer(questions[questionIndex] && questions[questionIndex]['question']);
  };
  const hideDialog = () => {
    setShowQuestion(true);
    setShowFinalMessage(false);
  };

return (

    <View>
      {/* Pass all the methods as Props to the QuizView component */}
      <QuizView
      questionIndex={questionIndex}
      showQuestion={showQuestion}
      showFinalMessage={showFinalMessage}
      correctAnswers={correctAnswers}
      Answer={Answer}
      totalQuestions={totalQuestions}
      handleShowAnswer={handleShowAnswer}
      manageClick={manageClick}
      restartQuestion={restartQuestion}
      hideDialog={hideDialog}
      />
      
    </View>
)
}

export default Quiz;


