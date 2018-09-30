import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import { Programmes, NewProgramme } from './programmes';
import colors from './styles/colors';

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
      headerRightContainerStyle: {
        paddingRight: 10,
      },
    },
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
