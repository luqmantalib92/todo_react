import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Header from './components/Header';

const PressingButtonFirst = () => (
  console.log("Pressing first page button!")
);

const PressingButtonSecond = () => (
  console.log("Pressing second page button!")
);

const App = () => (
  // Render component to view
  <View style={styleDesign.container}>
    <Header title='Title'/>
    <View style={styleDesign.center}>
      <Text>Red Wagon</Text>
      <TouchableOpacity
        style={styleDesign.primaryButton}
        onPress={PressingButtonFirst}>
        <Text style={styleDesign.primaryButtonText}>First Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styleDesign.primaryButton}
        onPress={PressingButtonSecond}>
        <Text style={styleDesign.primaryButtonText}>Second Page</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styleDesign = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  primaryButton: {
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#ff5733',
    borderRadius: 10,
  },
  primaryButtonText: {
    fontSize: 14,
    color: '#ffffff',
  }
});

export default App;