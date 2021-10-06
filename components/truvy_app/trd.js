import React, {useState} from 'react';

import {StyleSheet, View, Image, Button, Platform} from 'react-native';

export default function Trd() {
  return (
    <View style={styles.MainContainer}>
      <Button title="This is Third page" />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    margin: 10,
  },

  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'center',
  },
});
