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

export default function CatalogsList({item, onSelect, onFavorite}) {

  return (
    <>
      <View style={styles.container}>
        {item.populer == true ? (
          <View style={styles.populer}>
            <Icon name="star" size={8} color="#1e40af" />
            <Text style={tw`ml-1 text-[10px] text-blue-800`}>yeni</Text>
          </View>
        ) : (
          <></>
        )}
        {/* <Image
        resizeMode="center"
        style={styles.image}
        source={{uri: item.image}}
      /> */}
        <Text
          style={tw`text-white p-1 rounded bg-slate-900	text-center text-xs font-medium bg-`}>
          2.sayfa
        </Text>

        <Image
          resizeMode="center"
          style={styles.image}
          source={require('../../assets/img/test.png')}
        />
        <Text style={tw`text-sm font-bold text-black text-center`}>
          {item.title}
        </Text>

        <TouchableOpacity onPress={onSelect} style={tw`bg-cyan-100 p-2 w-full mt-3 rounded-lg`}>
        <Text style={tw`text-center`}>Kataloga git</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-cyan-100 p-2 w-full mt-3 rounded-lg`}
          onPress={onFavorite}>
          <Text style={tw`text-center`}>favoriye ekle</Text>
        </TouchableOpacity>
      </View>
    </>
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
    width: '100%',
    height: Dimensions.get('window').height / 4,
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
