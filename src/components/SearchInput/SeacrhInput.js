import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SeacrhInput() {
  return (
    <View
      style={tw`bg-white shadow h-10 text-gray-100 rounded flex-row items-center relative`}>
      <View
        style={tw`absolute left-[6px] top-0 z-50 h-full flex-row items-center`}>
        <AntDesign name="search1" size={18} color="#555" style={tw``} />
      </View>
      <TextInput style={tw`w-full text-slate-600 pl-7`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
