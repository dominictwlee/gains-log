import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { HeaderButton } from '../components';
import ProgrammeCard from './ProgrammeCard';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.gunMetal,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const icons = ['edit', 'archive', 'trash-2'];

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
      <View style={styles.screenContainer}>
        <ScrollView style={{ width: '100%' }}>
          {programmes.map(({ name, note }) => (
            <ProgrammeCard key={name} name={name} summary={note} icons={icons} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({ programmes: state.programmes });

export default connect(mapStateToProps)(Programmes);
