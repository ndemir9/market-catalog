import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import CatalogsList from './CatalogsList';
import {useNavigation} from '@react-navigation/native';

export default function CatalogsBox() {
  const data = [
    {
      id: 1,
      title: '12 Aralık',
      populer: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_of_B%C4%B0M.PNG',
    },
    {
      id: 2,
      title: '6-10 Aralık',
      populer: false,
      image:
        'https://i.pinimg.com/originals/f2/de/b3/f2deb32dc6cd0bcc8eb417f97e4b2540.png',
    },
    {
      id: 3,
      title: '2 Aralık',
      populer: false,
      image:
        'https://seeklogo.com/images/1/sok-super-market-logo-AA21518970-seeklogo.com.png',
    },
  ];

  const navigation = useNavigation();

  const handleSelect = (id, title) => {
    navigation.navigate('CatalogDetail', {detailId: id, title: title});
  };

  const addFavorites = title => {
    console.log(title);
  };

  const renderItem = ({item}) => {
    return (
      <CatalogsList
        item={item}
        onSelect={() => handleSelect(item.id, item.title)}
        onFavorite={() => addFavorites(item.title)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={tw`flex-row items-center justify-between mb-4 mx-1`}>
        <Text style={tw`text-xl font-medium text-black`}>Kataloglar</Text>
      </View> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
