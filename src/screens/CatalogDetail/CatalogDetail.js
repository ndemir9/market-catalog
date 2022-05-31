import {StyleSheet, Image, View, ScrollView, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function CatalogDetail({route}) {
  const id = route.params.detailId;

  return (
    <ScrollView style={styles.container}>
      <Text
        style={tw`text-white bg-slate-900	text-center text-lg font-medium bg-`}>
        1.sayfa
      </Text>
      <Image
        style={styles.image}
        // resizeMode="contain"
        source={require('../../assets/img/katalog1.jpg')}
      />
      <Text
        style={tw`text-white bg-slate-900	text-center text-lg font-medium bg-`}>
        2.sayfa
      </Text>
      <Image
        style={styles.image}
        // resizeMode="contain"
        source={require('../../assets/img/katalog2.jpg')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  imageBox: {},
  image: {
    width: '100%',
    height: 600,
  },
});
