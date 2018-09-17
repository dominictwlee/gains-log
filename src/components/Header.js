import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import COLORS from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.primaryBlue,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  title: {
    fontSize: 25,
    color: COLORS.white,
  },
});

const Header = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name={icon} size={30} color={COLORS.white} />
    </View>
  );
};

export default Header;
