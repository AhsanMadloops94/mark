import React, {useState, useRef} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Slider,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TextInput} from 'react-native-gesture-handler';
import {black, white} from 'react-native-paper/lib/typescript/styles/colors';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Add_Item({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 30,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-around',

            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 140,
              height: 30,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 25,
            }}>
            <Text style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
              {'  '}Add an Item
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 140,
              height: 30,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 25,
            }}>
            <Text style={{color: 'rgb(37,138,255)', fontSize: 19}}>
              {'  '}Cancel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 50}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              flexDirection: 'column',
              backgroundColor: 'rgb(51, 203,204)',
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              padding: 10,
              width: 90,
              height: 90,
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../images/umw.png')}
            />
            <Text style={{color: 'white'}}>Children</Text>
          </TouchableOpacity>

          <Text>{'    '}</Text>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              borderRadius: 10,
              padding: 10,
              shadowColor: 'black',
              shadowOffset: {width: 50, height: 50},
              shadowOpacity: 100,
              shadowRadius: 500,
              backgroundColor: 'white',
              width: 90,
              height: 90,
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../images/ppet.png')}
            />
            <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>Pet</Text>
          </TouchableOpacity>

          <Text>{'    '}</Text>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              flexDirection: 'column',
              borderRadius: 10,
              padding: 10,
              shadowColor: 'black',
              shadowOffset: {width: 50, height: 50},
              shadowOpacity: 100,
              shadowRadius: 100,
              width: 90,
              height: 90,
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../images/bike.png')}
            />
            <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>
              Bicycle
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 120, height: 120}}
            source={require('../images/prof.png')}
          />
        </View>

        <View
          style={{
            paddingLeft: 20,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <TouchableOpacity style={styles.et_usname}>
            <TextInput value={null} placeholder="Name" keyboardType="default" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.et_cal}>
            <TextInput
              value={null}
              placeholder="Date of birth"
              keyboardType="default"
              passwordRules={true}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[styles.all_acc, {backgroundColor: 'rgb(16,178,84)'}]}>
            <Text
              style={{color: 'white', fontSize: 20}}
              onPress={() => navigation.navigate('track_list')}>
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View_1: {
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgb(54,205,205)',

    alignItems: 'center',
  },

  View_2: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgb(54,205,205)',
    justifyContent: 'space-around',

    alignItems: 'center',
  },

  View_log: {
    flexDirection: 'column',
    flex: 1,

    alignItems: 'center',
  },

  View_login: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgb(54,205,205)',
    alignItems: 'center',
  },

  tch1: {
    borderWidth: 1,
    borderColor: 'rgb(54,205,205)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: 'rgb(91,214,214)',
    borderRadius: 100,
  },

  tch2: {
    borderWidth: 1,
    borderColor: 'rgb(54,205,205)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  tch_log: {
    borderWidth: 1,
    borderColor: 'rgb(54,205,205)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  et_usname: {
    borderWidth: 1,
    borderColor: 'lightgrey',

    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },

  req_acc: {
    justifyContent: 'space-around',

    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',

    width: 330,
    height: 140,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },

  tracker: {
    justifyContent: 'space-around',

    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',

    width: 330,
    height: 140,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },

  all_acc: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(54,205,205)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 70,
    backgroundColor: 'rgb(37,138,255)',
    borderRadius: 100,
    marginTop: 70,
    shadowColor: 'blue',
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 100,
    shadowRadius: 500,
  },

  et_pass: {
    borderWidth: 1,
    borderColor: 'lightgrey',

    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },

  et_cal: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 150,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },

  btnlog: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'rgb(54,205,205)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'rgb(16,178,84)',
    borderRadius: 100,
  },

  btnfb: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(59,89,152)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'rgb(59,89,152)',
    borderRadius: 100,
  },

  btngoog: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgb(54,205,205)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100,
  },

  img: {
    marginTop: 20,
  },

  track_6: {
    justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
