import React, {Component} from 'react';

import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';

export default class Mynewproject extends Component {
  constructor() {
    super();

    this.state = {
      TextInputValue: '',
    };
  }

  Simple_If_Else = () => {
    if (this.state.TextInputValue == 1) {
      Alert.alert('ONE');
    } else {
      Alert.alert('Sorry Entered Value Dose not Exist.');
    }
  };

  Nested_If_Else = () => {
    if (this.state.TextInputValue > 5) {
      Alert.alert('Entered Value is Grater than 5.');
    } else if (this.state.TextInputValue < 5) {
      Alert.alert('Entered Value is Less than 5.');
    } else if (this.state.TextInputValue == 5) {
      Alert.alert('Entered Value is 5');
    } else {
      Alert.alert('Sorry Entered Value Dose not Exist.');
    }
  };

  render() {
    return;
    <View style={styles.MainContainer}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Enter Your Choice"
        style={styles.TextInputStyle}
        onChangeText={text => {
          this.setState({TextInputValue: text});
        }}
      />

      <View style={{marginBottom: 10}}>
        <Button title="Call Normal If-Else" onPress={this.Simple_If_Else} />
      </View>

      <View style={{marginBottom: 10}}>
        <Button title="Call Nested If-Else" onPress={this.Nested_If_Else} />
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },

  TextInputStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#009688',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
