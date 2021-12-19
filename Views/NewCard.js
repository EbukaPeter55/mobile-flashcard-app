import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';



const NewCard = () => {
// Using a controlled state since this is a controlled component
const [question, setNewQuestion] = useState('');
const [answer, setNewAnswer] = useState('');

const handleQuesInput = answer => {
    setNewQuestion(answer);
};
const handleAnsInput = answer => {
    setNewAnswer(answer);
};


    return (

        <View>
            <View>
                <TextInput
                mode="flat"
                placeholder="Enter Question"
                onChangeText={handleQuesInput}
                />
                  <TextInput
                mode="flat"
                placeholder="Enter Answer"
                onChangeText={handleAnsInput}
                />

                <View style={styles.buttonContainer}>
                    <Button
                    style={styles.button}
                    raised
                    dark
                    mode="contained">

                    </Button>

                </View>
            </View>
        </View>
    )
}



export default NewCard;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
        width: '30%'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})