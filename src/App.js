import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store';
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

const Loading = () => (
  <View>
    <Text>LOADING</Text>
  </View>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate Loading={<Loading />} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    );
  }
}
