import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { HeaderButton } from '../components';

class Programmes extends Component {
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
    const { programmes } = this.props;
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
          {programmes.map(p => (
            <View key={p.name}>
              <Text>{p.name}</Text>
              <Text>{p.note}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({ programmes: state.programmes });

export default connect(mapStateToProps)(Programmes);
