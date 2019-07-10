import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class App extends Component {

  state = {
    content: 1,
  };

  touchHandle(arg) {
    let result = this.state.content + arg;

    this.setState({
      content: result,
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
            title="Tambah 1"
            onPress={ () => this.touchHandle(1) }
          />
          <Button
            title="Tambah 2"
            onPress={ () => this.touchHandle(2) }
          />
          <Button
            title="Tambah 3"
            onPress={ () => this.touchHandle(3) }
          />
        </View>
      );
  }

}