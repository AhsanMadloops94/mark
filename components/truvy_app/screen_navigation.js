//Screen_navigation

import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function FeedScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const refRBSheet = useRef();
  const [filePath, setFilePath] = useState(
    'http://images6.fanpop.com/image/photos/43300000/Cobie-Smulders-as-Maria-Hill-in-The-Avengers-2012-the-avengers-43387439-540-470.gif',
  );

  const chooseFile = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image);
      setFilePath(image.path);
    });
  };

  const captureImage = () => {
    ImageCropPicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: false,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setFilePath(image.path);
      refRBSheet.current.snapTo(1);
    });
  };
  return (
    <ScrollView>
      <View style={styles.gap}>
        <Text style={{fontSize: 30}}>Profile</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <ImageBackground
            source={{uri: filePath}}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 100,
              borderRadius: 150 / 2,
              overflow: 'hidden',
              shadowColor: 'black',
              shadowOffset: {width: 100, height: 100},
              shadowOpacity: 100,
              shadowRadius: 500,
              elevation: 15,
            }}
          />

          <View
            style={{flexDirection: 'column', marginTop: 10, marginLeft: 10}}>
            <Text style={{fontSize: 20, color: 'black'}}>
              Agent: Maria Hill
            </Text>
            <Text style={{fontSize: 15, color: 'grey'}}>ID: 324648</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            color: '#230DA0',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Measurements
        </Text>
        <View style={styles.gap2}>
          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>Weight</Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}
              onPress={() => navigation.navigate('Weight')}>
              165{' '}
              <Text style={{color: '#230DA0', fontWeight: 'normal'}}>lbs</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>Height</Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              <Text style={{color: '#230DA0'}}>5ft 6in</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>Age</Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              <Text style={{color: '#230DA0', fontWeight: 'bold'}}>32</Text>
            </Text>
          </View>
        </View>

        <View style={styles.gap2}>
          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>
              Chest Size
            </Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              54 <Text style={{color: '#230DA0'}}>in</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>
              Hip Size
            </Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              57 <Text style={{color: '#230DA0'}}>in</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>
              Waist Size
            </Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              37 <Text style={{color: '#230DA0'}}>in</Text>
            </Text>
          </View>
        </View>

        <View style={styles.gap3}>
          <View style={styles.container2}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>BMI</Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              <Text style={{color: '#230DA0', fontWeight: 'bold'}}>57</Text>
            </Text>
          </View>
          <Text>{'  '}</Text>

          <View style={styles.containerrr}>
            <Text style={{color: '#230DA0', textAlign: 'center'}}>
              Body Fat %
            </Text>
            <Text
              style={{
                color: '#230DA0',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              20 <Text style={{color: '#230DA0'}}>%</Text>
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 30,
            color: '#230DA0',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Progress Photo
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.containerrr_photo}>
            <ImageBackground
              source={{uri: filePath}}
              style={{
                width: 100,
                height: 150,
              }}
            />
          </View>

          <Text>{'        '}</Text>

          <View style={styles.containerrr_photo}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => refRBSheet.current.open()}>
              <Text
                style={{color: '#230DA0', textAlign: 'center', fontSize: 50}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <RBSheet
          ref={refRBSheet}
          closeOnPressBack={true}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={300}
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
                marginTop: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#230DA0',
                    width: 330,
                    height: 70,
                    borderRadius: 10,
                    paddingLeft: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => chooseFile('photo')}>
                  <Text style={{color: 'white'}}>
                    Take a picture from gallery
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: '#230DA0',
                    width: 330,
                    height: 70,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingLeft: 10,
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                  onPress={() => captureImage('photo')}>
                  <Text style={{color: 'white'}}>Launch Camera for Image</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>

        <Text
          style={{
            marginTop: 20,
            color: '#230DA0',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Settings
        </Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#230DA0',
              width: 330,
              height: 70,
              borderRadius: 10,
              paddingLeft: 10,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Notification
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#230DA0',
              width: 330,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Fitness tracker
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#230DA0',
              width: 330,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Help/Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 330,
              height: 70,
              borderRadius: 10,
              backgroundColor: 'lightgrey',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text
            style={{
              marginTop: 20,
              color: '#230DA0',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Terms of Service
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: '#230DA0',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Privacy Policy
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              marginTop: 20,
              color: '#230DA0',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            TRUVY 2021 v2.1
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function ProfileScreen() {
  return <View />;
}

function AccountScreen() {
  return <View />;
}

function Weight_graph({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const [tabcolor, setTabcolor] = useState('{buttonstateholder : false}');
  const [tabcolor2, setTabcolor2] = useState('{buttonstateholder2 : false}');
  const [tabcolor3, setTabcolor3] = useState('{buttonstateholder3: false}');
  const [tabcolor4, setTabcolor4] = useState('{buttonstateholder4: false}');
  const [tabcolor5, setTabcolor5] = useState('{buttonstateholder5: false}');

  /*const onPress = () => {
    setTabcolor({
      ButtonStateHolder: true,
    });
  };
  const onPress2 = () => {
    setTabcolor2({
      ButtonStateHolder2: true,
    });
  };

  const onPress3 = () => {
    setTabcolor3({
      ButtonStateHolder3: true,
    });
  };

  const onPress4 = () => {
    setTabcolor4({
      ButtonStateHolder4: true,
    });
  };

  const onPress5 = () => {
    setTabcolor5({
      ButtonStateHolder5: true,
    });
  };*/

  return (
    <ScrollView>
      <View style={styles.style1}>
        <View style={styles.style2}>
          <TouchableOpacity style={styles.tch1}>
            <Text
              style={styles.text_back}
              onPress={() => navigation.navigate('Profile_menu')}>
              {' '}
              Back{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tch2}>
            <Text style={styles.text_entry}> Add Entry + </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text_weight}>Weight</Text>

        <View style={styles.container3}>
          <View>
            <Text>
              <Text
                style={{fontSize: 30, color: '#230DA0', fontWeight: 'bold'}}>
                165
                <Text style={{fontSize: 15, fontWeight: 'normal'}}>lbs</Text>
              </Text>
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 250,
            }}>
            <TouchableOpacity
              style={[
                styles.graph_days,
                {
                  backgroundColor: tabcolor.ButtonStateHolder
                    ? '#230DA0'
                    : 'white',
                },
              ]}
              //onPress={() => onPress()}
            >
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? 'white' : '#230DA0',
                  },
                ]}>
                {' '}
                1W{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.graph_days,
                {
                  backgroundColor: tabcolor.ButtonStateHolder
                    ? '#230DA0'
                    : 'white',
                },
              ]}
              //              onPress={() => onPress2()}
            >
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? 'white' : '#230DA0',
                  },
                ]}>
                {' '}
                1M{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.graph_days,
                {
                  backgroundColor: tabcolor.ButtonStateHolder
                    ? '#230DA0'
                    : 'white',
                },
              ]}
              //onPress={() => onPress3()}
            >
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? 'white' : '#230DA0',
                  },
                ]}>
                {' '}
                3M{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.graph_days,
                {
                  backgroundColor: tabcolor.ButtonStateHolder
                    ? 'white'
                    : '#230DA0',

                  backgroundColor: tabcolor.ButtonStateHolder
                    ? '#230DA0'
                    : 'white',
                },
              ]}
              //onPress={() => onPress4()}
            >
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? 'white' : '#230DA0',
                    color: tabcolor.ButtonStateHolder ? 'white' : '#230DA0',
                  },
                ]}>
                {' '}
                1Y{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.graph_days,
                {
                  backgroundColor: tabcolor.ButtonStateHolder
                    ? '#230DA0'
                    : 'white',
                },
              ]}
              //onPress={() => onPress5()}
            >
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? 'white' : '#230DA0',
                  },
                ]}>
                {' '}
                All{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.target}>
          <Text style={styles.target_update}>Target</Text>
          <Text style={styles.target_update}>150 lbs O</Text>
        </View>

        <View style={styles.grid_lines}></View>

        <View style={styles.target_container}>
          <Text style={styles.target_update_container}>
            Average lbs per month
          </Text>
          <Text style={styles.target_update_container}>5 lbs</Text>
        </View>

        <View style={styles.grid_lines}></View>
        <View style={styles.target_container}>
          <Text style={styles.target_update_container}>
            Total number of lbs
          </Text>
          <Text style={styles.target_update_container}>20 lbs</Text>
        </View>

        <View style={styles.grid_lines}></View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function Profile({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Profile2') {
            iconName = focused ? 'cog' : 'cog';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#230DA0',
        tabBarInactiveTintColor: 'lightgrey',
      })}>
      <Tab.Screen name="Profile" component={FeedScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile_menu" component={Profile} />
        <Stack.Screen name="Weight" component={Weight_graph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  gap: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  gap2: {
    marginTop: 20,
    justifyContent: 'space-around',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  gap3: {
    marginTop: 20,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  container: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  container2: {
    width: 106,
    height: 80,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  containerrr: {
    width: 108,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  containerrr_photo: {
    marginTop: 20,
    width: 108,
    height: 160,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  container_scroll_1: {
    flex: 1,
  },

  text_item_scroll: {
    color: 'grey',
    textAlign: 'left',
    marginTop: 10,
    fontSize: 15,
  },

  container_scroll_3: {
    flex: 1,
    marginLeft: 20,
  },

  price_tag_scroll: {
    fontWeight: 'bold',
    color: 'black',
  },

  style1: {
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    flex: 1,
    padding: 20,
  },

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

  tch2: {
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 100,
  },

  graph_days: {
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
    backgroundColor: 'white',
    borderRadius: 100,
  },

  text_days: {
    color: '#230DA0',
  },

  all_days: {
    color: 'white',
  },

  text_back: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  text_entry: {
    color: '#230DA0',
    fontSize: 15,
    fontWeight: 'bold',
  },

  text_weight: {
    marginTop: 20,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  add_entry: {
    color: '#230DA0',
  },

  container3: {
    marginTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
    width: 320,
    height: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  target: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    textAlign: 'center',
    width: 330,
    height: 70,
    backgroundColor: '#230DA0',
    borderRadius: 25,
    justifyContent: 'space-around',
    justifyContent: 'space-between',
  },

  grid_lines: {
    marginTop: 10,
    justifyContent: 'space-between',
    backgroundColor: '#230DA0',
    width: 320,
    height: 3.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  target_values: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    textAlign: 'center',
    width: 330,
    height: 70,
    justifyContent: 'space-around',
    justifyContent: 'space-between',
  },

  target_update: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },

  target_container: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    width: 330,
    height: 40,
    justifyContent: 'space-around',
    justifyContent: 'space-between',
  },

  target_update_container: {
    color: '#230DA0',
    fontSize: 17,
  },
});
