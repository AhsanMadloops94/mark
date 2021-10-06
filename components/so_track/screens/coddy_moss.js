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

export default function Coddy_Moss({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [state, setState] = useState({SliderValue: 0});

  const refItemSheet = useRef();

  return (
    <ScrollView>
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

          <TouchableOpacity onPress={() => refItemSheet.current.open()}>
            <Image
              style={{width: 50, height: 50, borderRadius: 100, marginLeft: 10}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD_qhcurxU-VjZLUeHdaHbYZWnr-p55zoVw&usqp=CAU',
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Cody Moss</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'grey'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'grey'}}>
                .
              </Text>{' '}
              Offline
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginLeft: 30,
              backgroundColor: 'rgb(16,178,84)',
              borderRadius: 100,
              width: 100,
              height: 30,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Icon name="volume-up" size={20} color="white" />
            <Text style={{color: 'white'}}>{'  '}Voice Note</Text>
          </TouchableOpacity>
        </View>

        <RBSheet
          ref={refItemSheet}
          closeOnPressBack={true}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={600}
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
          <ScrollView>
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
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 19,
                        fontWeight: 'bold',
                      }}>
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

                <View
                  style={{flexDirection: 'row', marginLeft: 30, marginTop: 50}}>
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
                    <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>
                      Pet
                    </Text>
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
                    marginTop: 20,
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
                    <TextInput
                      value={null}
                      placeholder="Name"
                      keyboardType="default"
                    />
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
                    style={[
                      styles.all_acc,
                      {backgroundColor: 'rgb(16,178,84)'},
                    ]}>
                    <Text
                      style={{color: 'white', fontSize: 20}}
                      onPress={() => navigation.navigate('track_list')}>
                      Add Item
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
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
