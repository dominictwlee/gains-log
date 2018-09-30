import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { HeaderButton } from '../components';

export default class Programmes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Programmes',
      headerRight: (
        <HeaderButton icon="plus" iconSize={30} onPress={navigation.getParam('addNewProgramme')} />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      addNewProgramme: this.addNewProgramme,
    });
  }

  addNewProgramme = () => {
    this.props.navigation.navigate('NewProgramme');
  };

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
        <ScrollView>
          <Text>Hello World</Text>
          <Button title="Go To Dummy" onPress={() => this.props.navigation.navigate('Dummy')} />
        </ScrollView>
      </View>
    );
  }
}
