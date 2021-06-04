import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Information extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>information</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

export default Information;
