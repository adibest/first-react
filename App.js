import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class App extends Component {

  state = {
    content: 'Adib'
  };

  touchHandle() {
    this.setState({
      content: 'Bida'
    });
  }
 
  render() {
    return(
        <View 
          style={{ 
            flex:1, 
            justifyContent: 'center',
            alignItems: 'center', 
          }}
        >
          <Text> {this.state.content} </Text>
          <Button
            title="Ubah State"
            onPress={ () => this.touchHandle() }
          />
        </View>
      );
  }

}