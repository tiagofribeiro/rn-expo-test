import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../Components/Card';
import Colors from '../Constants/Colors';
import Input from '../Components/Input';

const StartScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const number = parseInt(enteredValue);
        if (number == NaN || number <= 0 || number > 99) {
            Alert.alert('','',[{}]);
            return;
        }

        setEnteredValue('');
        setConfirmed(true);
        setSelectedNumber(number);
    };

    let confirmedOutput;

    if (confirmed)
        confirmedOutput = <Text>Número escolhido: {selectedNumber}</Text>

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.sreen}>
                <Text style={styles.title}>Iniciar Jogo</Text>
                <Card style={styles.inputContainer}>
                    <Text>Digite um número</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary} /></View>
                        <View style={styles.button}><Button title="Confirmar" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    sreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '85%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    button: {
        width: 100
    }
});

export default StartScreen;