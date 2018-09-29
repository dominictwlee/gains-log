import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors, hexToRGBA } from '../styles';

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 66,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HeaderButton = ({ icon, ...props }) => (
  <TouchableHighlight
    {...props}
    style={styles.touchable}
    underlayColor={hexToRGBA(colors.charcoal, 0.4)}
  >
    <Icon name={icon} size={30} color={colors.white} />
  </TouchableHighlight>
);

export default HeaderButton;
