import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';

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
    return (
        <View style={styles.screen}>
            <Text>Dedução do Oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button onPress={() => {}} title="Menor" />
                <Button onPress={() => {}} title="Maior" />
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