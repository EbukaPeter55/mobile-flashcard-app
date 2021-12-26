import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import Deck from "../components/Deck";
import { getDailyReminderValue, timeToString } from "../utils/notifications";
import { useNavigation } from '@react-navigation/native';


// import DeckComp from "../components/DeckComp";
// import TimeModal from "../components/TimeModal";
// import { onCreateTriggerNotification } from "../utils/notifications";
// import { setLocalNotification } from './utils/notifications';
import { setLocalNotification } from "../utils/notifications";





export default function () {
  const navigation = useNavigation();


  // useEffect(()=>{
   
  // })

    const DECKS = useSelector(state => state.decks);
    // const notificationTime = useSelector(state => state.notificationShowTime);
    // const showNotification = useSelector(state => state.showNotification);
    // const firstTimeOpeningApp = useSelector(state => state.firstTimeOpeningApp);
    // const lastPlayedQuizDate = useSelector(state => state.lastPlayedQuizDate);
    const dispatch = useDispatch();
   
  
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
          <FlatList
            data={formattedDecksData}
            keyExtractor={item => item.id}
            renderItem={renderDeck}
          />
             <View style={styles.buttonWrapper}>
               {/* <TouchableOpacity>
                 <Text>Add deck</Text>
                 </TouchableOpacity> */}
            <Button
              style ={styles.button}
              onPress={handleAddNewDeck}
              raised
              theme={{roundness: 6}}
              mode="contained"
              dark>
              Add Deck
            </Button>
          </View>
        </View>
      </View>
    );

};




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonWrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        marginTop: 5,
        marginBottom: 10,
        width: '90%',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      },
      statusTitle: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
      }
})