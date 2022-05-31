import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Routes from './navigation/Routes';
import {ThemeProvider} from './context/ThemeContext';
import {LanguageProvider} from './context/Language';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes />
      </LanguageProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
