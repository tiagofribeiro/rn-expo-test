import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../Components/Card';

const StartScreen = props => {
    return (
        <View style={styles.sreen}>
            <Text style={styles.title}>Iniciar Jogo</Text>
            <Card style={styles.inputContainer}>
                <Text>Escolha um número</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { }} />
                    <Button title="Confirmar" onPress={() => { }} />
                </View>
            </Card>
        </View>
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
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartScreen;