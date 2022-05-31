import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import PopulerShopsList from './PopulerShopsList';
import {useNavigation} from '@react-navigation/native';

export default function PopulerShopsBox() {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'BIM',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_of_B%C4%B0M.PNG',
    },
    {
      id: 2,
      title: 'A101',
      image:
        'https://i.pinimg.com/originals/f2/de/b3/f2deb32dc6cd0bcc8eb417f97e4b2540.png',
    },
    {
      id: 3,
      title: 'ŞOK',
      image:
        'https://seeklogo.com/images/1/sok-super-market-logo-AA21518970-seeklogo.com.png',
    },
  ];

  const handleSelect = (id, title) => {
    navigation.navigate('Katalog', {detailId: id, title: title});
  };

  const renderItem = ({item}) => {
    return (
      <PopulerShopsList
        item={item}
        onSelect={() => handleSelect(item.id, item.title)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={tw`text-xl font-medium text-black mb-4`}>
        Popüler kataloglar
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});
