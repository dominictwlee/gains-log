import React, { Component, Fragment } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import { HeaderButton } from '../components';
import { addProgramme } from './actions';

const styles = StyleSheet.create({
  fieldWrapper: {
    margin: 20,
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
      handleSaveProgramme: this._handleSaveProgramme,
    });
  }

  _handleSaveProgramme = () => {
    const { name, note } = this.state;
    const { addProgramme } = this.props;
    const id = uuid();
    addProgramme({ name, note, id });
    this.props.navigation.navigate('Programmes');
  };

  render() {
    return (
      <Fragment>
        <View style={styles.fieldWrapper}>
          <Text>Programme Name</Text>
          <TextInput
            onChangeText={text => this.setState({ name: text })}
            underlineColorAndroid="black"
          />
        </View>
        <View style={styles.fieldWrapper}>
          <Text>Note</Text>
          <TextInput
            onChangeText={text => this.setState({ note: text })}
            underlineColorAndroid="black"
          />
        </View>
      </Fragment>
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
