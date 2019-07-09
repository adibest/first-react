import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Article extends Component {

	render() {

		return(
				<View style={styles.wrapper}>
				  <Text style={styles.title}>
				    ini Judul
				  </Text>
				  <Text style={styles.content}>
				    hbcbdsbfeknfunf nvkdsbkg jknigln
				  </Text>
				</View>
			);
	}
}

const styles = StyleSheet.create({
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