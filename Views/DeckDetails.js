import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Card, Paragraph } from 'react-native-paper';


export default function DeckList(props){

    const params = props.route.params;
  const {title} = params;
  const cardDeck = useSelector(state => state.decks[title]);
  const numberOfCards = cardDeck.questions.length;
  return (
    <View style={{flex: 1}}>
      <Card mode="elevated">
        <Card.Title title={title} />
        <Card.Content>
          <Paragraph>{numberOfCards} cards</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacing}>
          <Button
            icon="plus"
            onPress={() => {
              props.navigation.navigate('NewCard', {title});
            }}>
            Add Card
          </Button>
        </View>
        <View style={styles.buttonSpacing}>
          <Button
            icon="plus"
            title="Start Quiz"
            onPress={() => {
              props.navigation.navigate('StartQuiz', {title});
            }}>
            Start Quiz
          </Button>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonSpacing: {
      paddingTop: 10,
      width: '30%',
    },
  });
  
