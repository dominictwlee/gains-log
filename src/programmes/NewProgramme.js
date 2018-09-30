import React, { Component, Fragment } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { HeaderButton } from '../components';

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
      programmeName: '',
      note: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleSaveProgramme: this._handleSaveProgramme,
    });
  }

  _handleSaveProgramme = () => {
    this.props.navigation.navigate('Programmes');
  };

  render() {
    return (
      <Fragment>
        <View style={styles.fieldWrapper}>
          <Text>PROGRAMME NAME</Text>
          <TextInput
            onChangeText={text => this.setState({ programmeName: text })}
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

export default NewProgramme;
