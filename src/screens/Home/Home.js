import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';

//components
import AppLayout from '../../Layout/AppLayout';
import PopulerShopsBox from '../../components/PopulerShops/PopulerShopsBox';
import LastAddShopsBox from '../../components/LastAddShops/LastAddShopsBox';
import ShopsBox from '../../components/Shops/ShopsBox';
import Header from '../../components/Header/Header';

export default function Home({}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <LastAddShopsBox />
        <View style={tw`my-4`}></View>
        <ShopsBox />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
