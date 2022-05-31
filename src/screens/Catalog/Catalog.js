import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import CatalogsBox from '../../components/Catalogs/CatalogsBox';

export default function Catalog({route}) {
  const id = route.params.detailId;
  return (
    <SafeAreaView style={styles.container}>
      <CatalogsBox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
