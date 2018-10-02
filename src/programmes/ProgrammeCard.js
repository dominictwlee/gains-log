import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { fontStyles, colors } from '../styles';

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.cloud,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconBar: {
    flexDirection: 'row',
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
        <Icon name={i} key={i} size={25} />
      ))}
    </View>
  </View>
);

export default ProgrammeCard;
