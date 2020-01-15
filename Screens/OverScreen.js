import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const OverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Fim de jogo!</Text>
            <Text>Número de rodadas: {props.roundsNumber}</Text>
            <Text>O número era: {props.userNumber}</Text>
            <Button title="Reiniciar" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default OverScreen;