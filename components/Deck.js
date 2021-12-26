import React from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Button, Card, Paragraph, Divider} from 'react-native-paper';

const Deck = (props) => {
  const dispatch = useDispatch();
  const name = props.name;
  const cardNumber = props.cardsNumber;
  const deleteDeck = () => {
    dispatch({
      type: 'DELETE_DECK',
      payload: {
        title: name,
      },
    });
  };
  return (
    <View>
      <Card mode="outlined"
      onPress={() => {
        props.handleDeckNavigation(props.name);
      }}>
        <Card.Title title={name} 
        style={{marginLeft: 150}}/>
        <Card.Content>
          <Paragraph
          style={styles.cardText}>{cardNumber} cards</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button  
          onPress={deleteDeck}>Delete</Button>
         
        </Card.Actions>
      </Card>
      <Divider />   
    </View>
  );
}


export default Deck;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderColor: '#fff',
    borderBottomColor: '#000',
    borderWidth: 2,
    width: 300,
  },
  button: {
    color: 'red',
    fontSize: 80,
  },
  cardText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
