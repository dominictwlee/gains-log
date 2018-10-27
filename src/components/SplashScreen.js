import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { colors } from '../styles';

class SplashScreen extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      </View>
    );
  }
}
