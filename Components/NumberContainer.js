import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../Constants/Colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 22,
        color: Colors.secondary
    }
});

export default NumberContainer;