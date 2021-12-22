import React, {useState, useEffect } from 'react';
import { View,  StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Text,
    Card,
    Paragraph,
    Dialog,
    Portal,
    Divider,
  } from 'react-native-paper';
import { computePercentage } from '../utils/helpers';


const Quiz = (props) => {
  const title = props.route.params.title;
  const dispatch = useDispatch();
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
    } else {
      setAnswer(
        questions[questionIndex] && questions[questionIndex]['question'],
      );
      setShowQuestion(false);
    }
  };
  
  const handleCorrectClick = correctness => {
    if (questionIndex <= totalQuestions - 1) {
      if (correctness === 'correct') {
        setCorrectAnswers(correctAnswers + 1);
        setQuestionIndex(questionIndex + 1);
      } else {
        setQuestionIndex(questionIndex + 1);
      }
      if (questionIndex === totalQuestions - 1) {
        setShowFinalMessage(true);
      }
    }
  };
  const handleDismissDialog = () => {
    setCorrectAnswers(0);
    setQuestionIndex(0);
    setShowQuestion(true);
    setShowFinalMessage(false);
    setAnswer(questions[questionIndex] && questions[questionIndex]['question']);
  };
  const cancelDialogDisplay = () => {
    setShowQuestion(true);
    setShowFinalMessage(false);
  };

return (

    <View>
      <View style={gameStyles.container}>
        <View>
          <Card mode="outlined" style={gameStyles.card}>
            <Card.Title subtitle="Select a Question and Answer" />
            <Card.Content>
              <Paragraph>
                {' '}
                {questionIndex}/{totalQuestions} Questions
              </Paragraph>
              <Paragraph>
                <Text>{Answer}</Text>
              </Paragraph>
              <Paragraph></Paragraph>
              <Paragraph style={{paddingTop: 20}}>
                {showFinalMessage ? (
                  <Portal>
                    <Dialog
                      visible={showFinalMessage}
                      onDismiss={handleDismissDialog}>
                      <Dialog.Title>QUIZ COMPLETED !!</Dialog.Title>
                      <Dialog.Content>
                        <Paragraph>
                          Correct Score:
                          {computePercentage(correctAnswers, totalQuestions)}%
                        </Paragraph>
                      </Dialog.Content>
                      <Dialog.Actions>
                        <Button onPress={cancelDialogDisplay}>Cancel</Button>
                        <Button onPress={handleDismissDialog}>Restart</Button>
                      </Dialog.Actions>
                    </Dialog>
                  </Portal>
                ) : (
                  <Paragraph></Paragraph>
                )}
              </Paragraph>
            </Card.Content>
          </Card>
          <Divider />
        </View>
      </View>
      <View style={gameStyles.btnContainer}>
        {showQuestion ? (
          <Button
            dark
            title="Question"
            mode="contained"
            onPress={() => handleShowAnswer('question')}
            style={gameStyles.btn}>
            Question
          </Button>
        ) : (
          <Button
            mode="contained"
            title="Answer"
            dark
            onPress={() => handleShowAnswer('answer')}
            style={gameStyles.btn}>
            Answer
          </Button>
        )}
        <Button
          mode="contained"
          dark
          onPress={() => {
            handleCorrectClick('correct');
          }}
          style={gameStyles.btn}>
          Correct
        </Button>
        <Button
          mode="contained"
          dark
          onPress={() => {
            handleCorrectClick('Incorrect');
          }}>
          Incorrect
        </Button>
      </View>
    </View>
)
}

export default Quiz;

const gameStyles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
    },
    btn: {
      marginBottom: 10,
    },
    btnContainer: {
      marginTop: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

