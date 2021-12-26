import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';





const CardView = ({handleAnsInput, handleQuesInput, handleNewlyAddedQuestion}) => {

    return (
        <View>
             <View>
        <Text style={styles.textCenter}>Welcome to the New Question screen</Text>
          <TextInput
            mode="flat"
            placeholder="Type your question"
            onChangeText={handleQuesInput}
          />
          <TextInput
            mode="flat"
            placeholder="Type your answer"
            onChangeText={handleAnsInput}
          />
          <View style={styles.buttonWrapper}>
            <Button
              raised
              dark
              theme={{roundness: 6}}
              mode="contained"
              onPress={handleNewlyAddedQuestion}
              style={styles.button}>
              Create question
            </Button>
          </View>
        </View>
        </View>
    )
}


export default CardView;



const styles = StyleSheet.create({
    button: {
        marginTop: 460,
        width: '90%'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCenter: {
      textAlign: 'center',
      fontSize: 18,
      marginTop: "3%",
    }
})