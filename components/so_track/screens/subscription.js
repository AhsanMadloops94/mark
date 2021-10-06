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
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Subscription({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 30}}>
        <View style={{marginTop: 50}}>
          <Icon
            name="arrow-left"
            size={25}
            color="blue"
            onPress={() => navigation.navigate('Grandpa')}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{color: 'grey'}}>Best Plans</Text>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Subscription</Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/manage.png')}
              style={{width: 36, height: 45}}
            />

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
                Manage everything through App
              </Text>
              <Text style={{color: 'grey', marginLeft: 15}}>
                Cras quis nulla commodo, aliquam lectus se.
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/bell.png')}
              style={{width: 35, height: 40}}
            />

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
                Send or get notifications
              </Text>
              <Text style={{color: 'grey', marginLeft: 15}}>
                Donec facilisis tortor ut augue lacinia at.
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/live.png')}
              style={{width: 40, height: 40}}
            />

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
                Get live locations
              </Text>
              <Text style={{color: 'grey', marginLeft: 15}}>
                Lorem ipsum dolor sit amet consectetur adipic
              </Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',

              marginTop: 50,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 10,
                justifyContent: 'center',
                alignContent: 'center',
                padding: 10,
              }}>
              <Text style={{color: 'white'}}>Free</Text>
              <Text style={{color: 'white'}}>100% access with</Text>
              <Text style={{color: 'white'}}>limited access</Text>
            </TouchableOpacity>

            <Text>{'    '}</Text>

            <TouchableOpacity
              style={{
                flexDirection: 'column',
                borderRadius: 10,
                padding: 10,
                shadowColor: 'black',
                shadowOffset: {width: 50, height: 50},
                shadowOpacity: 100,
                shadowRadius: 500,
                backgroundColor: 'white',
              }}>
              <Text style={{fontWeight: 'bold'}}>Monthly</Text>
              <Text>Pay $20 per</Text>
              <Text>month</Text>
            </TouchableOpacity>

            <Text>{'    '}</Text>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                flexDirection: 'column',
                borderRadius: 10,
                padding: 10,
                shadowColor: 'black',
                shadowOffset: {width: 50, height: 50},
                shadowOpacity: 100,
                shadowRadius: 100,
              }}>
              <Text style={{fontWeight: 'bold'}}>Yearly</Text>
              <Text>Pay $200 per</Text>
              <Text>Year</Text>
            </TouchableOpacity>

            <Text>{'    '}</Text>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                flexDirection: 'column',
                borderRadius: 10,
                padding: 10,
                shadowColor: 'black',
                shadowOffset: {width: 50, height: 50},
                shadowOpacity: 100,
                shadowRadius: 100,
              }}>
              <Text style={{fontWeight: 'bold'}}>Yearly</Text>
              <Text>Pay $200 per</Text>
              <Text>Year</Text>
            </TouchableOpacity>

            <Text>{'    '}</Text>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                flexDirection: 'column',
                borderRadius: 10,
                padding: 10,
                shadowColor: 'black',
                shadowOffset: {width: 50, height: 50},
                shadowOpacity: 100,
                shadowRadius: 100,
              }}>
              <Text style={{fontWeight: 'bold'}}>Yearly</Text>
              <Text>Pay $200 per</Text>
              <Text>Year</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <TouchableOpacity style={styles.all_acc}>
            <Text
              style={{color: 'white'}}
              onPress={() => navigation.navigate('track_list')}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign: 'center', marginTop: 50}}>
          Subscription with automatically renew and{'\n'}your credit card with
          be charged at the of each period.
          <Text style={{fontSize: 20}}>{'\n\n\n'}Restore Purchase</Text>
        </Text>
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
