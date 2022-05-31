import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';

export default function AppLayout({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
