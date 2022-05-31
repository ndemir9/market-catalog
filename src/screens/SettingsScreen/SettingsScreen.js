import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Switch,
} from 'react-native';
import React, {useContext} from 'react';
import tw from 'twrnc';
import ThemeContext from '../../context/ThemeContext';
import LanguageContext from '../../context/Language';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const {theme, setTheme} = useContext(ThemeContext);
  const languagecontext = useContext(LanguageContext);
  const [strogeTheme, setStrogeTheme] = React.useState();

  // const storageTheme = AsyncStorage.getItem('thememode').then(res => {
  //   setStrogeTheme(res);
  // });

  const changeTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw`text-2xl text-gray-900`}>Settings</Text>
      <View style={tw`flex flex-row`}>
        <Text style={tw`text-2xl text-gray-900 mr-10`}>
          Karanlık mod: {strogeTheme == 'dark' ? 'aktif' : 'pasif'}
        </Text>
        {/* <Switch onValueChange={changeTheme} value={storageTheme} /> */}
      </View>
      <Text>{strogeTheme}</Text>
      <Text style={tw`text-2xl text-gray-900`}>
        language: {languagecontext.lang}
      </Text>
      <Button title="change theme" onPress={changeTheme} />
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
