import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

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

          {/*this is button biasa*/}
          <Button
            title="Tambah 1"
            onPress={ () => this.touchHandle(1) }
          />

        {/*this is touchable opacity*/}
          <TouchableOpacity
            onPress={() => this.touchHandle(2)}
          >
            <View>
              <Text>Saya text 1</Text>
              <Text>Saya text 2</Text>
              <Text>Saya text 3</Text>
            </View>
          </TouchableOpacity>

        {/*this is touchable highlight*/}
          <TouchableHighlight
            onPress={() => this.touchHandle(2)}
          >
            <View>
              <Text>Saya text 1</Text>
              <Text>Saya text 2</Text>
              <Text>Saya text 3</Text>
            </View>
          </TouchableHighlight>

        {/*this is touchable natuve feedback*/}
          <TouchableNativeFeedback
            onPress={() => this.touchHandle(2)}
          >
            <View>
              <Text>Saya text 1</Text>
              <Text>Saya text 2</Text>
              <Text>Saya text 3</Text>
            </View>
          </TouchableNativeFeedback>
          
        </View>
      );
  }

}