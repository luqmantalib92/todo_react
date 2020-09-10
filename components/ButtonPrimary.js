import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

const ButtonPrimary = props => (
    <TouchableOpacity
        onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{props.child}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#ff5733',
        borderRadius: 10,
    },
    text: {
        fontSize: 14,
        color: '#ffffff',
    }
});

export default ButtonPrimary;