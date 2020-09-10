import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

const Card = props => (
    <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.rowdate}>
            <View style={styles.detaildate}>
                <Text style={styles.normal}>Start Date</Text>
                <Text style={styles.bold}>3 Sep 2020</Text>
            </View>
            <View style={styles.detaildate}>
                <Text style={styles.normal}>End Date</Text>
                <Text style={styles.bold}>10 Sep 2020</Text>
            </View>
            <View style={styles.detaildate}>
                <Text style={styles.normal}>Time Left</Text>
                <Text style={styles.bold}>5 day 14 hrs</Text>
            </View>
        </View>
        <View style={styles.rowstatus}>
            <Text style={styles.normal}>Status Incomplete</Text>
            <Text style={styles.bold}>Tick if complete</Text>
        </View>

    </View>
);

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        margin: 15,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    rowdate: {
        marginTop: 20,
        paddingTop: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
    },
    rowstatus: {
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E6E0CD',
        height: 60,
    },
    detaildate: {
        flexDirection: 'column',
        height: 20,
    },
    normal: {
        fontSize: 16,
        fontWeight: '300',
    },
    bold: {
        fontSize: 16,
        fontWeight: '600',
    }
});

export default Card;