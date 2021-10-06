import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import React, {useRef, useState} from 'react';

export default function Learn() {
  const [tabbgcolor, setTabbgcolor] = useState('');
  const [textcolor, setTextcolor] = useState('#230DA0');

  const [tabbgcolor2, setTabbgcolor2] = useState('');
  const [textcolor2, setTextcolor2] = useState('#230DA0');

  const [tabbgcolor3, setTabbgcolor3] = useState('');
  const [textcolor3, setTextcolor3] = useState('#230DA0');
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'space-between',
          justifyContent: 'space-around',
          flex: 1,
          alignItems: 'center',
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        <Text
          style={{
            borderRadius: 10,
            paddingHorizontal: 8,
            paddingVertical: 3,
            textAlign: 'center',
            backgroundColor: '#230DA0',
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Learn
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  style2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tch1: {
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 30,
    backgroundColor: '#230DA0',
    borderRadius: 100,
  },

  text_back: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  text_heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
