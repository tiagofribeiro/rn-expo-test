import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import BodyText from '../Components/BodyText';
import TitleText from '../Components/TitleText';
import Colors from '../Constants/Colors';


const OverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Fim de jogo!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')}
                    source={{ uri: 'https://cdn1.iconfinder.com/data/icons/social-media-blue-series/128/A-61-512.png' }}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={{textAlign: 'center', fontSize: 15}}>
                    O celular precisou de <BodyText style={styles.highlight}>{props.roundsNumber}</BodyText> rodadas para adivinhar o número <BodyText style={styles.highlight}>{props.userNumber}</BodyText>
                </BodyText>
            </View>
            <Button title="Novo Jogo" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 250,
        height: 250,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 175,
        overflow: 'hidden',
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultContainer: {
        width: '70%',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: 200,
        height: 200
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default OverScreen;