import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styleDesign.header}>
            <Text style={styleDesign.text}>{title}</Text>
        </View>
    );
};

const styleDesign = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#ff5733',
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 40,
    },
});

export default Header;