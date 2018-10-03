import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { fontStyles, colors } from '../styles';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: colors.cloud,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 25,
  },
});

const ProgrammeCard = ({ name, summary, icons }) => (
  <View style={styles.card}>
    <View>
      <Text style={fontStyles.cardHeader}>{name}</Text>
      <Text>{summary}</Text>
    </View>
    <View style={styles.iconBar}>
      {icons.map(i => (
        <Icon name={i} key={i} size={25} style={styles.icon} />
      ))}
    </View>
  </View>
);

export default ProgrammeCard;
