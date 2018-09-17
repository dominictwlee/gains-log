import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../components';

export default class Programmes extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <Header title="Programmes" icon="plus" />
        <ScrollView>
          <Text>Hello World</Text>
        </ScrollView>
      </View>
    );
  }
}
