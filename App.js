// import * as React from 'react';
// import { NavigationContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './screen/HomeScreen';
// import EditScreen from './screen/EditScreen';


// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{ title: 'Welcome' }}
//                 />
//                 <Stack.Screen
//                     name="Profile"
//                     component={EditScreen}
//                     options={{ title: 'Edit' }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;


// Import main modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
// Import component
import Header from './components/Header';
import ButtonFloating from './components/ButtonFloating';
import Card from './components/Card';
// Import database
import Database from './database/Database';

// Global initialize todo list object
var todoList = [];

// Function press floating button
const PressingButton = () => {
    // Add data to database
    Database.addData("Add data todo list");
    window.alert("Add data SUCCESS!");
    
    // Update data
    updateData();
};

// Function to update data
function updateData() {
    // Initialize todo list object
    todoList = [];
    // Get data from database
    var data = Database.getData();

    // Loop data pass to list object
    data.map(raw => (
        todoList.push(<Card key={raw.id} title={raw.title} />)
    ));

    // window.location.reload(false);
};

// Main application function
const App = () => {
    // Update data
    updateData();
    // Main render
    return (
        <View style={styles.container}>
            <Header title='To-Do List' />

            {/* Content */}
            <View>
                {todoList}
            </View>

            <ButtonFloating onPress={PressingButton} icon="plus" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
});

export default App;