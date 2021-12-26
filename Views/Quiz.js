import React, {useState } from 'react';
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


const Quiz = (props) => {
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
      <View style={styles.container}>
        <View>
          <Card mode="outlined" style={styles.card}>
            <Card.Title 
            style={styles.titleStyle}
            subtitle="Kindly choose whether question is 
            correct for each question" />
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
                      onDismiss={restartQuestion}>
                      <Dialog.Title>END OF QUIZ!!</Dialog.Title>
                      <Dialog.Content>
                        <Paragraph>
                          Correct Score:
                          {computePercentage(correctAnswers, totalQuestions)}%
                        </Paragraph>
                      </Dialog.Content>
                      <Dialog.Actions>
                        <Button onPress={hideDialog}>Cancel</Button>
                        <Button onPress={restartQuestion}>Restart</Button>
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
      <View style={styles.btnWrapper}>
        {showQuestion ? (
          <TouchableOpacity
            dark
            title="Question"
            // mode="contained"
            onPress={() => handleShowAnswer('question')}
            style={styles.routeBtn}>
           <Text style={styles.textStyle}> Question </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            mode="contained"
            title="Answer"
            dark
            onPress={() => handleShowAnswer('answer')}
            style={styles.routeBtn}
            >
           <Text style={styles.textStyle}> Answer </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          mode="contained"
          
          onPress={() => {
            manageClick('correct');
          }}
          style={[styles.routeBtn, {backgroundColor: 'green'}]}>
        <Text style={styles.textStyle}> Correct answer </Text>
        </TouchableOpacity>
        <TouchableOpacity
          mode="contained"
          style={[styles.routeBtn, {backgroundColor: 'red'}]}
          onPress={() => {
            manageClick('Incorrect');
          }}>
      <Text style={styles.textStyle}> Incorrect answer </Text>

        </TouchableOpacity>
      </View>
    </View>
)
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
    },
    routeBtn: {
      backgroundColor: 'purple',
      borderRadius: 5,
      width: '80%',
      padding: 15,
      margin: 10,
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
    },
    btn: {
      marginBottom: 10,
    },
    btnWrapper: {
      marginTop: '60%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: 20,
    }
  });

