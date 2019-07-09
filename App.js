import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {


  render() {

    return (
        <View style={styles.container}>
          <View style={styles.v1}></View>
          <View style={styles.v2}></View>
          <View style={styles.v3}>
            <View style={styles.v4}></View>
            <View style={styles.v5}></View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
  },
  v3: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%',
  },
  v4: {
    flex: 1,
    backgroundColor: 'aqua',
    width: '100%',
  },
  v5: {
    flex: 1,
    backgroundColor: 'lime',
    width: '100%',
  },
})