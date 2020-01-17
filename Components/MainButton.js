import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const MainButton = props => {
    return <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({

});

export default MainButton;