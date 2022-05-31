import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ShopList from './ShopsList';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ShopBox() {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'BIM',
      populer: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_of_B%C4%B0M.PNG',
    },
    {
      id: 2,
      title: 'A101',
      populer: true,
      image:
        'https://i.pinimg.com/originals/f2/de/b3/f2deb32dc6cd0bcc8eb417f97e4b2540.png',
    },
    {
      id: 3,
      title: 'ŞOK',
      populer: true,
      image:
        'https://seeklogo.com/images/1/sok-super-market-logo-AA21518970-seeklogo.com.png',
    },
    {
      id: 4,
      title: 'BIM',
      populer: false,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_of_B%C4%B0M.PNG',
    },
    {
      id: 5,
      title: 'A101',
      populer: false,
      image:
        'https://i.pinimg.com/originals/f2/de/b3/f2deb32dc6cd0bcc8eb417f97e4b2540.png',
    },
    {
      id: 6,
      title: 'ŞOK',
      populer: false,
      image:
        'https://seeklogo.com/images/1/sok-super-market-logo-AA21518970-seeklogo.com.png',
    },
    {
      id: 7,
      title: 'BIM',
      populer: false,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_of_B%C4%B0M.PNG',
    },
    {
      id: 8,
      title: 'A101',
      populer: false,
      image:
        'https://i.pinimg.com/originals/f2/de/b3/f2deb32dc6cd0bcc8eb417f97e4b2540.png',
    },
    {
      id: 9,
      title: 'ŞOK',
      populer: false,
      image:
        'https://seeklogo.com/images/1/sok-super-market-logo-AA21518970-seeklogo.com.png',
    },
  ];

  const handleSelect = (id, title) => {
    navigation.navigate('Catalog', {detailId: id, title: title});
  };

  const renderItem = ({item}) => {
    return (
      <ShopList
        item={item}
        onSelect={() => handleSelect(item.id, item.title)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={tw`flex-row items-center justify-between mb-4 mx-1`}>
        <Text style={tw`text-xl font-medium text-black`}>Marketler</Text>
      </View>
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
    marginHorizontal: 10,
  },
});
