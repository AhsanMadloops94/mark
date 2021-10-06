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

export default function Grandpa({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [state, setState] = useState({SliderValue: 0});

  const refRBSheet = useRef();
  const refCNTRBSheet = useRef();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: 30,
          }}>
          <View style={{marginTop: 10, backgroundColor: 'white'}}>
            <Icon
              name="arrow-left"
              size={20}
              color="blue"
              onPress={() => navigation.navigate('track_list')}
            />
          </View>

          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginLeft: 10,
            }}
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Grandpa</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'grey'}}>
              Offline
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 100,
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              onPress={() => navigation.navigate('subscription')}>
              <Icon name="volume-up" size={20} color="white" />
              <Text style={{color: 'white'}}>{'  '}Voice Note</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: 5,
                backgroundColor: 'lightcoral',
                borderRadius: 100,
                width: 70,
                height: 40,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              onPress={() => refRBSheet.current.open()}>
              <Text style={{color: 'white'}}>{'  '}S.O.S</Text>
            </TouchableOpacity>
          </View>
        </View>

        <RBSheet
          ref={refRBSheet}
          closeOnPressBack={true}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={450}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: 'white',
              // opacity: 0.8,
            },
            draggableIcon: {
              backgroundColor: 'gray',
              opacity: 0.2,
            },
          }}>
          <View
            style={{
              flex: 1,
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
                  <Text
                    style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
                    {'  '}SOS Contacts
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

              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 130, height: '50%'}}
                  source={require('../images/sos.png')}
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: 'lightgrey',
                    fontWeight: 'bold',
                  }}>
                  No Contacts added yet!
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  justifyContent: 'space-around',

                  alignContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 5,
                  paddingRight: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgb(16,178,84)',
                    borderRadius: 100,
                    width: 140,
                    height: 30,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'white'}}>{'  '}Import contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgb(37,138,255)',
                    borderRadius: 100,
                    width: 140,
                    height: 30,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}
                  onPress={() => refCNTRBSheet.current.open()}>
                  <Text style={{color: 'white'}}>{'  '}Add Manually</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>

        <RBSheet
          ref={refCNTRBSheet}
          closeOnPressBack={true}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={450}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: 'white',
              // opacity: 0.8,
            },
            draggableIcon: {
              backgroundColor: 'gray',
              opacity: 0.2,
            },
          }}>
          <View
            style={{
              flex: 1,
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
                  <Text
                    style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
                    {'  '}Add Contact
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

              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.et_usname}>
                  <TextInput
                    value={null}
                    placeholder="Name"
                    keyboardType="default"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.et_pass}>
                  <TextInput
                    value={null}
                    placeholder="Enter Phone Number"
                    keyboardType="default"
                    passwordRules={true}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.all_acc, {backgroundColor: 'rgb(16,178,84)'}]}>
                  <Text
                    style={{color: 'white', fontSize: 20}}
                    onPress={() => navigation.navigate('track_list')}>
                    Add Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity style={styles.tracker}>
            <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
              <Text style={{fontSize: 20, color: 'grey'}}>
                Last location of Cody
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                <Icon name="map-pin" size={20} color="black" />
                1825 Church Ave, Brooklyn, NY 11226
              </Text>
            </View>
            <Image
              source={require('../images/goright.png')}
              style={{
                backgroundColor: 'rgb(16,178,84)',
                borderRadius: 100,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{paddingLeft: 15, paddingRight: 15}}>
          <Image
            source={require('../images/cody_map.png')}
            style={{
              width: '100%',
              height: 300,
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, color: 'grey'}}>
            {'    '} Device Volume - {state.SliderValue} %
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#009688"
              onValueChange={ChangedValue =>
                setState({SliderValue: ChangedValue})
              }
              style={{width: '80%'}}
            />
            <Icon name="volume-off" size={20} color="lightgrey" />
            <Text style={{color: 'lightgrey'}}> Mute</Text>
          </View>
        </View>

        <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Elderly Fall Detector
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          <Image
            source={require('../images/grrs.png')}
            style={{
              width: '100%',
              height: 200,
            }}
          />
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
