import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  title: {
    fontSize: 25,
    color: colors.white,
  },
});

const Header = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name={icon} size={30} color={colors.white} />
    </View>
  );
};

export default Header;
