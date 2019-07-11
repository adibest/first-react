import React from 'react';
import {View, Text, ScrollView} from 'react-native';

let todos = [
  {
    title: 'Mau Tidur',
    desc: 'Ngantuk lor ngantuk lor ngantuk lor'
  },
  {
    title: 'Mau Makan',
    desc: 'Luwe lor luwe lor luwe lor'
  },
  {
    title: 'Mau Mau',
    desc: 'Mua lor Mua lor Mua lor'
  },
];

export default class App extends React.Component {

  render() {
    return(
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          
          {todos.map( (todo, index) => (
            
            <View key={index}>
              <Text>{index}</Text>
              <Text>{todo.title}</Text>
              <Text>{todo.desc}</Text>
            </View>
          ) )}

        </View>
    );
  }
}