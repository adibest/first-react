import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class App extends Component {

  state = {
    content: 1,
    baca: false,
  };

  bacaHandle() {
    this.setState({
      baca: !this.state.baca
    });
  }

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
            <View style={{
              backgroundColor: 'yellow',
              borderRadius: 10,
              width: 100,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Saya text 1</Text>
              <Text>Saya text 2</Text>
              <Text>Saya text 3</Text>
            </View>
          </TouchableNativeFeedback>

        {/*this is touchable without feedback*/}
          <TouchableWithoutFeedback
            onPress={() => this.bacaHandle()}
            style={{marginTop: 15}}
          >
            <View style={{backgroundColor: this.state.baca ? 'lime' : 'aqua'}}>
              <Text>Bismillah</Text>
            </View>
          </TouchableWithoutFeedback>
          
        </View>
      );
  }

}