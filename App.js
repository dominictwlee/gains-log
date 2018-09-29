import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Programmes, NewProgramme } from './src/programmes';
import colors from './src/styles/colors';

const RootStack = createStackNavigator(
  {
    Programmes: Programmes,
    NewProgramme: NewProgramme,
  },
  {
    initialRouteName: 'Programmes',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryBlue,
      },
      headerTintColor: colors.white,
      // headerRightContainerStyle: {
      //   paddingRight: 10,
      // },
    },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
