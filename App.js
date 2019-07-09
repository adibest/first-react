import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Article from './Article.js';

export default class App extends Component {


  render() {

    return (
        <View style={styles.container}>

          <Article />
          <Article />
          <Article />
          <Article />

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})