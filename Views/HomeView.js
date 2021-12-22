import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";
import Deck from "../components/Deck";
// import DeckComp from "../components/DeckComp";
// import TimeModal from "../components/TimeModal";
// import { onCreateTriggerNotification } from "../utils/notifications";




export default function ({navigation}) {

    const DECKS = useSelector(state => state.decks);
    // const notificationTime = useSelector(state => state.notificationShowTime);
    // const showNotification = useSelector(state => state.showNotification);
    const firstTimeOpeningApp = useSelector(state => state.firstTimeOpeningApp);
    const lastPlayedQuizDate = useSelector(state => state.lastPlayedQuizDate);
    const dispatch = useDispatch();
    // const dateWhenQuizWasLastPlayed = new Date(
    //   lastPlayedQuizDate,
    // ).toLocaleDateString();
    // const currentDate = new Date().toLocaleDateString();
    // if (dateWhenQuizWasLastPlayed !== currentDate) {
    //   dispatch({
    //     type: 'SET_SHOW_NOTIFICATION',
    //     payload: {showNotification: true},
    //   });
    // }
  
    // if (showNotification) {
    //   onCreateTriggerNotification(notificationTime);
    // }
  
    const decks = Object.values(DECKS);
  
    const formattedDecksData = decks.map(deck => ({
      ...deck,
      title: deck.title,
      id: Math.random().toString(36),
    }));
    const handleDeckNavigation = deck => {
      navigation.navigate('DeckDetails', {title: deck});
    };
  
    const handleAddNewDeck = () => {
      navigation.navigate('NewDeck');
    };
    
    const renderDeck = ({item}) => (
      <Deck
        key={item.id}
        name={item.title}
        cardsNumber={item.questions.length}
        handleDeckNavigation={() => handleDeckNavigation(item.title)}
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {/* {firstTimeOpeningApp && <TimeModal />} */}
          <View style={styles.button}>
            <Button
              onPress={handleAddNewDeck}
              raised
              theme={{roundness: 6}}
              mode="contained"
              dark>
              Add Deck
            </Button>
          </View>
          <FlatList
            data={formattedDecksData}
            keyExtractor={item => item.id}
            renderItem={renderDeck}
          />
        </View>
      </View>
    );

};




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: '30%',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
      },
      statusTitle: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center'
      }
})