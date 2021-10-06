//weight graph screen
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import React, {useState} from 'react';
export default function Weight_graph() {
  const [tabcolor, setTabcolor] = useState('{buttonstateholder : false}');
  const [tabcolor2, setTabcolor2] = useState('{buttonstateholder2 : false}');
  const [tabcolor3, setTabcolor3] = useState('{buttonstateholder3: false}');
  const [tabcolor4, setTabcolor4] = useState('{buttonstateholder4: false}');
  const [tabcolor5, setTabcolor5] = useState('{buttonstateholder5: false}');

  const onPress = () => {
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
  };

  return (
    <ScrollView>
      <View style={styles.style1}>
        <View style={styles.style2}>
          <TouchableOpacity style={styles.tch1}>
            <Text style={styles.text_back}> Back </Text>
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
              onPress={() => onPress()}>
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
                    ? 'white'
                    : '#230DA0',
                },
              ]}
              onPress={() => onPress2()}>
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? '#230DA0' : 'white',
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
                    ? 'white'
                    : 'blue',
                },
              ]}
              onPress={() => onPress3()}>
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? '#230DA0' : 'white',
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
                    ? '#230DA0'
                    : 'white',

                  backgroundColor: tabcolor.ButtonStateHolder
                    ? 'white'
                    : '#230DA0',
                },
              ]}
              onPress={() => onPress4()}>
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? '#230DA0' : 'white',
                    color: tabcolor.ButtonStateHolder ? '#230DA0' : 'white',
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
                    ? 'white'
                    : '#230DA0',
                },
              ]}
              onPress={() => onPress5()}>
              <Text
                style={[
                  styles.text_days,
                  {
                    color: tabcolor.ButtonStateHolder ? '#230DA0' : 'white',
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

const styles = StyleSheet.create({
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

/*import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class MyProject extends Component {
  constructor() {
    super();

    this.state = {
      // Default Value for ButtonStateHolder State. Now the button is Enabled.
      ButtonStateHolder: false,

      // Default Text for Button Title.
      ButtonTitle: 'Button Enabled',
    };
  }

  DisableButtonFunction = () => {
    this.setState({
      // On State True it will Disable the button.
      ButtonStateHolder: true,
    });
  };

  SampleButtonFunction = () => {
    Alert.alert('Button Clicked');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={[
            styles.ButtonStyle,
            {
              backgroundColor: this.state.ButtonStateHolder ? 'red' : 'blue',
            },
          ]}
          activeOpacity={0.5}
          onPress={this.SampleButtonFunction}>
          <Text
            style={[
              styles.TextStyle,
              {
                color: this.state.ButtonStateHolder ? 'blue' : 'yellow',
              },
            ]}>
            {' '}
            {this.state.ButtonTitle}{' '}
          </Text>
        </TouchableOpacity>

        <Button
          title="Disable Above Button"
          onPress={this.DisableButtonFunction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  ButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '70%',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
*/
