import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function PopulerShopsList({item, onSelect}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      {/* <View style={styles.inner}> */}
      <Image
        resizeMode="center"
        style={styles.image}
        source={{uri: item.image}}
      />
      <Text style={tw`text-xl font-bold text-black text-center`}>
        {item.title}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#bfdbfe',
    marginBottom: 15,
    marginRight: 20,
    alignItems: 'center',
  },
  inner: {
    // width: '48%',
    // alignItems: 'center',
    // borderWidth: .75,
    // margin: '1%',
    // padding: 15,
    // width: '100%',
    // alignItems: 'center',
    // padding: 15,
    // borderRadius: 12,
    // backgroundColor: '#bfdbfe',
    // marginBottom: 15,
  },
  image: {
    width: Dimensions.get('window').width / 1.7,
    height: 100,
  },
});
