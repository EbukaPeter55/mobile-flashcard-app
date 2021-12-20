import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeckDetails from './DeckDetails';
import HomeView from './HomeView';
import NewCard from './NewCard';
import NewDeck from './NewDeck';
import Quiz from './Quiz';


const Stack = createNativeStackNavigator();

const ScreenHeaderStyles = {
    headerStyle: {
        backgroundColor: 'tomato',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },

};

const MainComponent = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Decks"
                screenOptions={ScreenHeaderStyles}>
                    <Stack.Screen
                    name="Decks"
                    component={HomeView}
                    options={{title: "Decks"}}
                    />
                     <Stack.Screen
                    name="DeckDetails"
                    component={DeckDetails}
                    options={{title: "Deck Details"}}
                    />
                     <Stack.Screen
                    name="NewCard"
                    component={NewCard}
                    options={{title: "Add Card"}}
                    />
                     <Stack.Screen
                    name="NewDeck"
                    component={NewDeck}
                    options={{title: "Add New Deck"}}
                    />
                     <Stack.Screen
                    name="StartQuiz"
                    component={Quiz}
                    options={{title: "Quiz"}}
                    />

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default MainComponent;
