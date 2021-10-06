/*import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/homescreen';
import DetailScreen from './components/detailscreen';
import AboutScreen from './components/aboutscreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
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
import SplashScreen from './components/so_track/screens/splashscreen';
import OnBoarding1 from './components/so_track/screens/onboarding1';
import OnBoarding2 from './components/so_track/screens/onboarding2';
import OnBoarding3 from './components/so_track/screens/onboarding3';
import Login from './components/so_track/screens/login';
import Permission_Access from './components/so_track/screens/permission_access';
import Sign_Up from './components/so_track/screens/sign_up';
import Forgot from './components/so_track/screens/forgot';
import Create_New_Password from './components/so_track/screens/create_new_password';
import Track_List from './components/so_track/screens/track_list';
import Coddy_Moss from './components/so_track/screens/coddy_moss';
import Charlie from './components/so_track/screens/charlie';
import Grandpa from './components/so_track/screens/grandpa';
import Subscription from './components/so_track/screens/subscription';
import Add_Item from './components/so_track/screens/add_item';
import RBSheet from 'react-native-raw-bottom-sheet';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash_Screen" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={OnBoarding1} />
        <Stack.Screen name="Onboarding2" component={OnBoarding2} />
        <Stack.Screen name="Onboarding3" component={OnBoarding3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Permission_Access" component={Permission_Access} />
        <Stack.Screen name="Sign_up" component={Sign_Up} />
        <Stack.Screen name="forgot" component={Forgot} />
        <Stack.Screen
          name="Create_new_password"
          component={Create_New_Password}
        />
        <Stack.Screen name="track_list" component={Track_List} />
        <Stack.Screen name="coddy_moss" component={Coddy_Moss} />
        <Stack.Screen name="Charlie" component={Charlie} />
        <Stack.Screen name="Grandpa" component={Grandpa} />
        <Stack.Screen name="subscription" component={Subscription} />
        <Stack.Screen name="add_item" component={Add_Item} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
