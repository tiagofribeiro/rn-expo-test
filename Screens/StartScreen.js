import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import Card from '../Components/Card';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import Colors from '../Constants/Colors';
import DefaultStyle from '../Constants/DefaultStyle';


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
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert('Número Inválido', 'O número precisa estar entre 1 e 99', [{ text: 'Ok', style: 'destructive ', onPress: resetInputHandler }]);
            return;
        }

        setEnteredValue('');
        setConfirmed(true);
        setSelectedNumber(number);
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed)
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={DefaultStyle.bodyText}>Número escolhido:</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Começar" onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        );

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.sreen}>
                <Text style={{ ...DefaultStyle.title, ...styles.title }}>Iniciar Jogo</Text>
                <Card style={styles.inputContainer}>
                    <Text style={DefaultStyle.bodyText}>Digite um número</Text>
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartScreen;