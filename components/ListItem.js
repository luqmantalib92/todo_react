import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item }) => (
    <TouchableOpacity style={styleDesign.listItem}>
        <View style={styleDesign.listItemView}>
            <Text style={styleDesign.listItemText}>{item.text}</Text>
            <Icon name="remove" size={20} color="firebrick" />
        </View>
    </TouchableOpacity>
);

const styleDesign = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
});

export default ListItem;