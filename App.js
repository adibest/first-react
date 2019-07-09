import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Article from './Article.js';

export default class App extends Component {


  render() {

    return (
        <View style={styles.container}>

          <Article 
            title="judul 1"
            content="ini content"
          />

          <Article 
            title="judul 2 "
            content="ini content ini isinya"
          />

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})