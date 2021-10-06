import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Diary from './diary';
import Supplements from './supplements';
import Learn from './learn';

export default function Nuitrition({navigation}) {
  const [state, setState] = useState();
  function dry() {
    setState(<Diary />);
  }

  function supp() {
    setState(<Supplements />);
  }

  function lrn() {
    setState(<Learn />);
  }

  const [tabbgcolor, setTabbgcolor] = useState('');
  const [textcolor, setTextcolor] = useState('#230DA0');

  const [tabbgcolor2, setTabbgcolor2] = useState('');
  const [textcolor2, setTextcolor2] = useState('#230DA0');

  const [tabbgcolor3, setTabbgcolor3] = useState('');
  const [textcolor3, setTextcolor3] = useState('#230DA0');

  const colorchng = () => {
    setTabbgcolor('#230DA0');
    setTextcolor('white');

    setTabbgcolor2('white');
    setTextcolor2('#230DA0');

    setTabbgcolor3('white');
    setTextcolor3('#230DA0');
  };

  const colorchng2 = () => {
    setTabbgcolor2('#230DA0');
    setTextcolor2('white');

    setTabbgcolor('white');
    setTextcolor('#230DA0');

    setTabbgcolor3('white');
    setTextcolor3('#230DA0');
  };

  const colorchng3 = () => {
    setTabbgcolor3('#230DA0');
    setTextcolor3('white');

    setTabbgcolor('white');
    setTextcolor('#230DA0');

    setTabbgcolor2('white');
    setTextcolor2('#230DA0');
  };

  const [iconcolor, setIconcolor] = useState('lightgrey');
  const [checked, setChecked] = React.useState('');
  const [checked_renu, setChecked_renu] = React.useState('');
  const [checked_tru, setChecked_tru] = React.useState('');
  const [checked_calm, setChecked_calm] = React.useState('');
  const [checked_bal, setChecked_bal] = React.useState('');
  const [checked_vita, setChecked_vita] = React.useState('');
  const [checked_MSM, setChecked_MSM] = React.useState('');

  const [checked_WM, setChecked_WM] = React.useState('');
  const [checked_MN, setChecked_MN] = React.useState('');
  const [checked_ubi, setChecked_ubi] = React.useState('');
  const [checked_pyco, setChecked_pyco] = React.useState('');
  const [checked_omega, setChecked_omega] = React.useState('');
  const [checked_pro, setChecked_pro] = React.useState('');

  const [checked_trufix, setChecked_trufix] = React.useState('');
  const [checked_vy, setChecked_vy] = React.useState('');

  const iconcolour = () => {
    setIconcolor('gold');
  };

  return (
    <ScrollView>
      <View style={styles.View_nutrition}>
        <Text style={styles.text_heading}>Nutrition</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            justifyContent: 'space-around',
            flex: 1,
            alignItems: 'center',
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          <Text
            style={{
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 3,
              textAlign: 'center',
              backgroundColor: '#230DA0',
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            onPress={() => dry()}>
            Diary
          </Text>

          <Text
            style={{
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 3,
              textAlign: 'center',
              backgroundColor: tabbgcolor2,
              color: textcolor2,
              fontSize: 20,
              fontWeight: 'bold',
            }}
            onPress={() => supp()}>
            Supplements
          </Text>

          <Text
            style={{
              borderRadius: 10,
              paddingHorizontal: 8,
              paddingVertical: 3,
              textAlign: 'center',
              backgroundColor: tabbgcolor3,
              color: textcolor3,
              fontSize: 20,
              fontWeight: 'bold',
            }}
            onPress={() => lrn()}>
            Learn
          </Text>
        </View>

        <View>{state}</View>

        <View>
          <TouchableOpacity style={styles.dont_know_supplements}>
            <Text style={styles.where_to_start}>
              <Text style={styles.dont_know}>Don't know where to start?</Text>
              {'\n'}Fint the supplements that are right for you
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.all_supp}>All Supplements</Text>
        <Text style={styles.blood_chem}>
          Blood Chemnitry and weight management
        </Text>

        <View style={styles.blood_tabs}>
          <View style={styles.Blood_view}>
            <RadioButton
              value="first"
              status={checked_trufix === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_trufix('first')}
            />
            <RadioButton
              value="second"
              status={checked_trufix === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_trufix('second')}
            />

            <Text style={styles.core_text}>
              Tru
              <Text style={{fontSize: 15}}>(truFix)</Text>
            </Text>

            <Icon
              style={{marginLeft: 85}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Blood_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_vy === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_vy('first')}
            />

            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_vy === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_vy('second')}
            />

            <Text style={styles.core_text}>
              Vy
              <Text style={{fontSize: 15}}>(tru control)</Text>
            </Text>

            <Icon
              style={{marginLeft: 60}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>
        </View>

        <Text style={styles.blood_chem_hydr}>Hydration</Text>
        <View style={styles.blood_tabs}>
          <View style={styles.Blood_view}>
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => setCount(count + 1)}>
              <Text style={styles.textcontainer}>-</Text>
            </TouchableOpacity>
            <Text>{'    '}</Text>

            <Text style={styles.core_text}>1</Text>
            <Text>{'    '}</Text>

            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => setCount(count + 1)}>
              <Text style={styles.textcontainer}>+</Text>
            </TouchableOpacity>

            <Text>{'       '}</Text>

            <Text style={styles.core_text}>H + H</Text>

            <Icon
              style={{marginLeft: 60}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Blood_view}>
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => setCount(count + 1)}>
              <Text style={styles.textcontainer}>-</Text>
            </TouchableOpacity>
            <Text>{'    '}</Text>

            <Text style={styles.core_text}>1</Text>
            <Text>{'    '}</Text>

            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => setCount(count + 1)}>
              <Text style={styles.textcontainer}>+</Text>
            </TouchableOpacity>

            <Text>{'       '}</Text>
            <Text style={styles.core_text}>H & H</Text>

            <Icon
              style={{marginLeft: 60}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>
        </View>

        <Text style={styles.blood_chem_hydr}>Core supplements</Text>

        <View style={styles.blood_tabs_hyd_1}>
          <View style={styles.Core_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_WM === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_WM('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_WM === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_WM('second')}
            />

            <Text style={styles.core_text}>Complete Women</Text>

            <Icon
              style={{marginLeft: 30}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Core_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_MN === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_MN('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_MN === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_MN('second')}
            />

            <Text style={styles.core_text}>Complete Men</Text>

            <Icon
              style={{marginLeft: 30}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Core_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_ubi === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_ubi('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_ubi === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_ubi('second')}
            />

            <Text style={styles.core_text}>ubiquinol</Text>

            <Icon
              style={{marginLeft: 75}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Core_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_pyco === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_pyco('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_pyco === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_pyco('second')}
            />

            <Text style={styles.core_text}>Pycnogenol</Text>

            <Icon
              style={{marginLeft: 55}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Core_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_omega === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_omega('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_omega === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_omega('second')}
            />

            <Text style={styles.core_text}>Omega-3</Text>

            <Icon
              style={{marginLeft: 75}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Core_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_pro === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_pro('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_pro === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_pro('second')}
            />

            <Text style={styles.Speciality_text}>Probiotic</Text>
            <Icon
              style={{marginLeft: 75}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>
        </View>

        <Text style={styles.blood_chem_hydr}>Speciality supplements</Text>
        <View style={styles.blood_tabs_hyd_1}>
          <View style={styles.Speciality_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_renu === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_renu('first')}
            />

            <Text style={styles.Speciality_text}>Renu</Text>

            <Icon
              style={{marginLeft: 152}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Speciality_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_tru === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_tru('first')}
            />

            <Text style={styles.Speciality_text}>TruSlumber</Text>
            <Icon
              style={{marginLeft: 90}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Speciality_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_calm === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_calm('first')}
            />

            <Text style={styles.Speciality_text}>Calm Gummies</Text>
            <Icon
              style={{marginLeft: 60}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Speciality_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_bal === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_bal('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_bal === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_bal('second')}
            />

            <Text style={styles.Speciality_text}>Balance</Text>
            <Icon
              style={{marginLeft: 88}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>

          <View style={styles.Speciality_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_vita === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_vita('first')}
            />
            <RadioButton
              style={{color: '#230DA0'}}
              value="second"
              status={checked_vita === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_vita('second')}
            />

            <Text style={styles.Speciality_text}>Vitafix Gummies</Text>
            <Icon
              style={{marginLeft: 10}}
              name="star"
              size={30}
              color={iconcolor}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
            />
          </View>

          <View style={styles.Speciality_view}>
            <RadioButton
              style={{color: '#230DA0'}}
              value="first"
              status={checked_MSM === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_MSM('first')}
            />

            <RadioButton
              style={{backgroundColor: '#230DA0'}}
              value="second"
              uncheckedColor="#230DA0"
              status={checked_MSM === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_MSM('second')}
            />

            <Text style={styles.Speciality_text}>MSM</Text>
            <Icon
              style={{marginLeft: 110}}
              name="star"
              size={30}
              color={iconcolor}
              onPress={() => iconcolour()}
            />

            <Icon
              style={{marginLeft: 25}}
              name="angle-right"
              size={30}
              color="lightgrey"
              onPress={() => iconcolour()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  View_padding: {
    padding: 20,
  },

  text_heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  View_nutrition: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
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
