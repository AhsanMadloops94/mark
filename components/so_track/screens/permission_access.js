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

import {TextInput} from 'react-native-gesture-handler';

export default function Permission_Access({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <ScrollView>
      <View>
        <View style={{marginLeft: 20, marginTop: 50}}>
          <Text style={{color: 'grey'}}>Request Access</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Need your permission
          </Text>
        </View>

        <View style={styles.track_6}>
          <TouchableOpacity style={styles.req_acc}>
            <Icon name="camera" size={30} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Camera</Text>
              <Text>Allow app for use to take{'\n'}picture</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 100,
                width: 70,
                height: 35,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Allow</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.req_acc}>
            <Icon name="photo" size={30} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Photo Library
              </Text>
              <Text>Access for save photos in {'\n'}your gallery</Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 100,
                width: 70,
                height: 35,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Allow</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.req_acc}>
            <Icon name="bell" size={30} />

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Notification
              </Text>
              <Text>Get important information{'\n'}without opening app.</Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 100,
                width: 70,
                height: 35,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Allow</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.req_acc}>
            <Icon name="map-pin" size={30} />

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Location</Text>
              <Text>Allow access to your{'\n'}location for better support</Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 100,
                width: 70,
                height: 35,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Allow</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.all_acc}
            onPress={() => navigation.navigate('track_list')}>
            <Text style={{color: 'white'}}>Allow All Access</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
