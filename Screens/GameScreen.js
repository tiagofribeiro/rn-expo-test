import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';
import DeafultStyle from '../Constants/DefaultStyle';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomN = Math.floor(Math.random() * (max - min)) + min;
    if (randomN == exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return randomN;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert('Não minta!', 'Você sabe que isso está errado...', [{ text: 'Desculpe', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower')
            currentHigh.current = currentGuess;
        else
            currentLow.current = currentGuess;

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRound => currentRound + 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={DeafultStyle.bodyText}>Dedução do Oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button onPress={nextGuessHandler.bind(this, 'lower')} title="Menor" />
                <Button onPress={nextGuessHandler.bind(this, 'greater')} title="Maior" />
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;