import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {


  render() {

    return (
        <View style={styles.container}>

          <View style={styles.wrapper}>
            <Text style={styles.title}>
              ini Judul
            </Text>
            <Text style={styles.content}>
              hbcbdsbfeknfunf nvkdsbkg jknigln
            </Text>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.title}>
              ini Judul
            </Text>
            <Text style={styles.content}>
              hbcbdsbfeknfunf nvkdsbkg jknigln
            </Text>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.title}>
              ini Judul
            </Text>
            <Text style={styles.content}>
              hbcbdsbfeknfunf nvkdsbkg jknigln
            </Text>
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
  wrapper: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 11,
  }
})