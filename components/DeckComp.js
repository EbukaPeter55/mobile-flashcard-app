import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Divider } from 'react-native-paper';

const DeckComp = (props) => {
const dispatch = useDispatch();
const name = props.name;
const cardNumber = props.cardNumber;

const deleteDeck = () => {
    dispatch({
        type: 'DELETE_DECK',
        payload: {
            title: name
        },
    });
};

return (
<View>
    <Card mode="outlined">
    <Card.title title={name}/>
    <Card.Content>
        <Paragraph>{cardNumber} cards</Paragraph>
    </Card.Content>

    <Card.Actions>
        <Button onPress={deleteDeck}>Delete deck</Button>
        <Button
        onPress={()=> {props.handleDeckNavigation(props.name);
        }}>
           Deck details
        </Button>
    </Card.Actions>
    </Card>
    <Divider/>
</View>
);

}


export default DeckComp;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderColor: '#ffff',
        borderBottomColor: '#000',
        borderWidth: 2,
        width: 300
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
});