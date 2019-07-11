import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

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
          {/*perulangan map*/}
          {todos.map( (todo, index) => (
            
            <View key={index}>
              <Text>{index}</Text>
              <Text>{todo.title}</Text>
              <Text>{todo.desc}</Text>
            </View>
          ) )}

          <View style={{
            margin: 15,
            width: '100%',
            borderWidth: 1,
            borderColor: 'black',
          }} />

        {/*perulangan flatlist*/}
        <FlatList
          data={todos}
          keyExtractor={ (todo,index) => index.toString()}
          renderItem={ (todo) => (

            <View>
              <Text>{ todo.item.title }</Text>
              <Text>{ todo.item.desc }</Text>
            </View>

          )}
        />

        </View>
    );
  }
}