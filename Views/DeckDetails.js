import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
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
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.routeBtn}
            onPress={() => {
              props.navigation.navigate('NewCard', {title});
            }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Add card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.routeBtn}
            title="Start Quiz"
            onPress={() => {
              props.navigation.navigate('StartQuiz', {title});
            }}>
           <Text style={{color: 'white', textAlign: 'center'}}>Start quiz</Text>
          </TouchableOpacity>
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
    routeBtn: {
      backgroundColor: 'purple',
      borderRadius: 5,
      width: '90%',
      padding: 15,
      margin: 10,
    },
    buttonWrapper: {
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      paddingTop: 10,
      width: '80%',
    },
  });
  
