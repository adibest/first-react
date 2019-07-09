import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Article from './Article.js';

export default class App extends Component {


  render() {

    return (
        <ScrollView>

          <View style={styles.container}>

            <Article 
              title="judul 1"
              content="ini content"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

            <Article 
              title="judul 2 "
              content="ini content ini isinya"
            />

          </View>

        </ScrollView>
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