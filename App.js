import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio.js';

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
      <Portfolio/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#282C34',
    color: '#FFFFFF',
  },
});