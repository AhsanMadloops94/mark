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

export default function Track_List({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <ScrollView>
      <Image
        source={require('../images/tracker.png')}
        style={{width: 360, height: 70}}
      />
      <View>
        <View style={styles.track_6}>
          <View style={styles.req_acc}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD_qhcurxU-VjZLUeHdaHbYZWnr-p55zoVw&usqp=CAU',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginRight: 20}}>
                  <Icon name="bluetooth-b" size={15} /> Connected
                </Text>
                <Text>
                  <Icon name="battery-3" size={15} color="green" /> 78%{' '}
                </Text>
              </View>

              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cody Moss</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgb(16,178,84)',
                    borderRadius: 100,
                    width: 100,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('coddy_moss')}>
                  <Text style={{color: 'white'}}>Message</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 20,

                    backgroundColor: 'rgb(37,138,255)',
                    borderRadius: 100,
                    width: 100,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Mic mode on</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.req_acc}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uVhVQqETYhCw4Sc2wvQFYV9Xg3OeQQZ8Ig&usqp=CAU',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginRight: 20}}>
                  <Icon name="bluetooth-b" size={15} /> Connected
                </Text>
                <Text>
                  <Icon name="battery-3" size={15} color="green" /> 78%{' '}
                </Text>
              </View>

              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Charlie</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
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
                  <Text
                    style={{color: 'white'}}
                    onPress={() => navigation.navigate('Charlie')}>
                    Vibrate
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={true}
                  style={{
                    marginLeft: 20,
                    backgroundColor: 'white',
                    borderRadius: 100,
                    width: 100,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'grey'}}>Auto speak</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.req_acc}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginRight: 20}}>
                  <Icon name="bluetooth-b" size={15} /> Connected
                </Text>
                <Text>
                  <Icon name="battery-3" size={15} color="green" /> 78%{' '}
                </Text>
              </View>

              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                My Bicycle 1
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'lightcoral',
                    borderRadius: 100,
                    width: 90,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Start Ride</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 20,
                    backgroundColor: 'lightgrey',
                    borderRadius: 100,
                    width: 100,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Send Alarm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.req_acc}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8ExJ_D93626cEF7Yom1WtWXISOU0b8xnUA&usqp=CAU',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginRight: 20}}>
                  <Icon name="bluetooth-b" size={15} /> Connected
                </Text>
                <Text>
                  <Icon name="battery-3" size={15} color="green" /> 78%{' '}
                </Text>
              </View>

              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Smokey</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
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
                  <Text style={{color: 'white'}}>Vibrate</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 20,
                    backgroundColor: 'lightgrey',
                    borderRadius: 100,
                    width: 70,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Allow</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.req_acc}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginRight: 20}}>
                  <Icon name="bluetooth-b" size={15} /> Disconnected
                </Text>
                <Text>
                  <Icon name="battery-3" size={15} color="green" /> 78%{' '}
                </Text>
              </View>

              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Grandpa</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
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
                  <Text style={{color: 'white'}}>Message</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 20,
                    backgroundColor: 'rgb(16,178,84)',
                    borderRadius: 100,
                    width: 100,
                    height: 35,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('Grandpa')}>
                  <Text style={{color: 'white'}}>Mic Mode On</Text>
                </TouchableOpacity>
              </View>
            </View>
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
