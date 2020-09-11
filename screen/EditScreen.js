import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const EditScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
            }
        />
    );
};
const ProfileScreen = () => {
    return <Text>This is Jane's profile</Text>;
};