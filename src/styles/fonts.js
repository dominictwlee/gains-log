import { StyleSheet } from 'react-native';
import colors from './colors';

const defaultFont = 'Roboto';

const fontStyles = StyleSheet.create({
  cardHeader: {
    fontFamily: defaultFont,
    color: colors.charcoal,
    fontWeight: '700',
    fontSize: 18,
  },
});

export default fontStyles;
