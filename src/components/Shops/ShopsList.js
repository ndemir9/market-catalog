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
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ShopList({item, onSelect}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      {item.populer == true ? (
        <View style={styles.populer}>
          <Icon name="star" size={8} color="#1e40af" />
          <Text style={tw`ml-1 text-[10px] text-blue-800`}>popüler</Text>
        </View>
      ) : (
        <></>
      )}
      <Image
        resizeMode="center"
        style={styles.image}
        source={{uri: item.image}}
      />
      <Text style={tw`text-xl font-bold text-black text-center`}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '46.7%',
    margin: '2%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: Dimensions.get('window').width / 1.7,
    height: 100,
  },
  populer: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bfdbfe',
    borderRadius: 4,
    padding: 2,
  },
});
