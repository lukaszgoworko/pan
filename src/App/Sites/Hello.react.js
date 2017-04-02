/**
 * Sample Navigation Site
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>
          Hello Navigation
        </Text>
      </View>
    );
  }
}
