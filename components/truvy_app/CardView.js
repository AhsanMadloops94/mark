import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function CardView() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
        />

        <Text style={styles.text}>
          {' '}
          This is Card-View with React-native logo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  container2: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 300,
    elevation: 5,
  },

  text: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
