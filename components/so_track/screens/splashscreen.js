import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function SplashScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <View style={styles.View_1}>
      <Image style={styles.img} source={require('../images/so_track.png')} />

      <TouchableOpacity
        style={styles.tch1}
        onPress={() => navigation.navigate('Onboarding1')}>
        <Icon name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
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
