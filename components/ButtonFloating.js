import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const ButtonFloating = props => (
    <View style={styles.footer}>
        <TouchableOpacity
            onPress={props.onPress}>
            <View style={styles.button} >
                <Icon style={styles.icon} name={props.icon} size={20} color="white" />
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#FF5733',
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    icon: {
        position: 'absolute',
        alignSelf: 'center',
        top: 20,
    },
    footer: {
        position: 'absolute',
        left: (WINDOW_WIDTH / 2) - 30,
        top: (WINDOW_HEIGHT - 60) - 30,
    }
});

export default ButtonFloating;