import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
    <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#F9B52F',
    },
    text: {
        color: '#000000',
        marginTop: 40,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'flex-start'
    },
});

export default Header;