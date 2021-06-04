import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import React from 'react';
import {StyleSheet} from 'react-native';
import {MainNavigation} from './src/screens/MainNavigation';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <MainNavigation style={styles.sectionContainer} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
