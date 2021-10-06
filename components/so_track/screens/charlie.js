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

export default function Charlie({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [state, setState] = useState({SliderValue: 0});

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
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uVhVQqETYhCw4Sc2wvQFYV9Xg3OeQQZ8Ig&usqp=CAU',
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Charlie</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'grey'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'grey'}}>
                .
              </Text>{' '}
              Offline
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginLeft: 70,
              backgroundColor: 'rgb(16,178,84)',
              borderRadius: 100,
              width: 110,
              height: 40,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name="volume-up" size={20} color="white" />
            <Text style={{color: 'white'}}>{'  '}Voice Note</Text>
          </TouchableOpacity>
        </View>

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

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgb(16,178,84)',
              borderRadius: 100,
              width: 100,
              height: 40,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: 'white'}}>Vibrate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 100,
              width: 100,
              height: 40,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: 'rgb(37,138,255)',
            }}>
            <Text style={{color: 'white'}}>Whistle</Text>
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
