import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: colors.cloud,
  },
  label: {
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    color: colors.primaryLight,
  },
});

const TextField = ({ label, handleInputChange }) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      onChangeText={text => handleInputChange(label, text)}
      underlineColorAndroid="transparent"
    />
  </View>
);

export default TextField;
