import React from 'react';
import { View } from 'react-native';

const SizedBox = props => (
    <View style={({ height: props.height, backgroundColor: props.backgroundColor })} />
);

export default SizedBox;