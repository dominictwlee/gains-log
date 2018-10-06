import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import { HeaderButton, TextField } from '../components';
import { addProgramme } from './actions';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.gunMetal,
    width: '100%',
    height: '100%',
  },
});

class NewProgramme extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'New programme',
      headerRight: (
        <HeaderButton
          icon="save"
          iconSize={26}
          onPress={navigation.getParam('handleSaveProgramme')}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      note: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleSaveProgramme: this.handleSaveProgramme,
    });
  }

  handleSaveProgramme = () => {
    const { name, note } = this.state;
    const { addProgramme } = this.props;
    const id = uuid();
    addProgramme({ name, note, id });
    this.props.navigation.navigate('Programmes');
  };

  handleInputChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        {Object.keys(this.state).map(input => (
          <TextField key={input} label={input} handleInputChange={this.handleInputChange} />
        ))}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProgramme: programme => dispatch(addProgramme(programme)),
});

export default connect(
  null,
  mapDispatchToProps
)(NewProgramme);
