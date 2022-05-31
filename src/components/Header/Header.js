import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import tw from 'twrnc';
import SeacrhInput from '../SearchInput/SeacrhInput';

export default function Header() {
  return (
    <View style={[styles.container, tw`relative`]}>
      <View style={styles.inner}>
        <Text style={tw`text-xl text-black`}>Header</Text>
      </View>
      <View style={styles.innerTwo}>
        <SeacrhInput />
      </View>
      <View style={styles.inner}>
        <Text>test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inner: {
    flex: 1,
  },
  innerTwo: {
    flex: 2,
  },
  test: {
    backgroundColor: 'red',
  },
  drawerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
  },
  navBox: {
    backgroundColor: 'black',
  },
});
