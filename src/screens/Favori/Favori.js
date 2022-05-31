import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';

export default function Favori() {
  const [favorites, setFavorites] = useState(['test1','test2']);
  const [textAdd, setAddText] = useState('abc');

  const handleAddPress = () => {
    setFavorites([...favorites, textAdd]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-3xl text-gray-900`}>favori</Text>
      <View>
        <TextInput
          style={tw`bg-slate-900`}
          value={textAdd}
          onChangeText={setAddText}
        />
        <Button title="add" onPress={() => handleAddPress()} />
      </View>

      <View>
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <Text style={tw`text-black text-xl`}>{item}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#576e8c',
    padding: 20,
  },
});
