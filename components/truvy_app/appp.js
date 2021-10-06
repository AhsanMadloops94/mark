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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Nuitrition from './components/Nuitrition';
import user_profile from './components/user_profile';

<Nuitrition />;
<user_profile />;

function Weight_graph({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const [tabcolor, setTabcolor] = useState('{buttonstateholder : false}');
  const [tabcolor2, setTabcolor2] = useState('{buttonstateholder2 : false}');
  const [tabcolor3, setTabcolor3] = useState('{buttonstateholder3: false}');
  const [tabcolor4, setTabcolor4] = useState('{buttonstateholder4: false}');
  const [tabcolor5, setTabcolor5] = useState('{buttonstateholder5: false}');

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
          } else if (route.name === 'Nuitrition') {
            iconName = focused ? 'heart' : 'heart';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#230DA0',
        tabBarInactiveTintColor: 'lightgrey',
      })}>
      <Tab.Screen name="Nuitrition" component={Nuitrition} />
      <Tab.Screen name="Profile" component={user_profile} />
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
  container_view1: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
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

  View_padding: {
    padding: 20,
  },

  text_heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  View_nutrition: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },

  view_nutrition_tabs: {
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
  },

  text_diary_supplements_learn: {
    fontSize: 20,
    color: '#230DA0',
    fontWeight: 'bold',
  },

  where_to_start: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  dont_know: {
    fontSize: 24,
  },

  dont_know_supplements: {
    padding: 20,
    width: 330,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#230DA0',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  diary_tab: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  supplements_tabs: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#230DA0',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  learn_tab: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  supplements_tab: {
    width: 80,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#230DA0',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  all_supp: {
    marginTop: 50,
    color: '#230DA0',
    fontSize: 20,
    fontWeight: 'bold',
  },

  blood_chem: {
    paddingLeft: 10,
    color: '#230DA0',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 15,
  },

  supplements: {
    marginTop: 50,
  },

  Tru_trufix: {
    padding: 20,
    width: 330,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    marginTop: 10,
  },

  trufix_1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  trufix_2: {
    fontSize: 24,
    color: '#230DA0',
    fontWeight: 'bold',
  },

  blood_tabs: {
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'space-around',
  },

  blood_chem_hydr: {
    paddingLeft: 10,
    color: '#230DA0',
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 15,
  },

  blood_tabs_hyd_1: {
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'space-around',
  },

  Speciality_view: {
    flexDirection: 'row',
    padding: 20,
    width: 330,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    marginTop: 10,
  },

  Core_view: {
    flexDirection: 'row',
    padding: 20,
    width: 330,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    marginTop: 10,
  },

  Blood_view: {
    flexDirection: 'row',
    padding: 20,
    width: 330,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    marginTop: 10,
  },

  Speciality: {
    padding: 20,
    width: 330,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
    marginTop: 10,
  },

  Speciality_text: {
    fontSize: 20,
    color: '#230DA0',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 2.5,
  },

  core_text: {
    fontSize: 20,
    color: '#230DA0',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 2.5,
  },

  radio: {
    height: 50,
    width: 50,
  },

  roundButton1: {
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop: 2.5,
  },

  textcontainer: {
    fontSize: 15,
  },

  View_tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
