import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios'
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  var [text, setText] = useState('');
  var [Status, setStatus] = useState('');
  var [item_hash, setitem_hash] = useState('');
  var [Reception, setReception] = useState('');
  var [Sender, setSender] = useState('');
  var [Chain, setChain] = useState('');

  const process = () => {
    console.log('Le texte entré est :', text);

    axios.get(`https://api1.aleph.im/api/v0/messages/` + text
    ).then(res => {
      console.log(res);
      setStatus(res.data.status);
      setitem_hash(res.data.item_hash);
      setReception(res.data.reception_time);
      setSender(res.data.message.sender);
      setChain(res.data.message.chain);
    }).catch(err => {
      console.log(err);
    })
  };

  return (
      <View style={styles.container}>
        <Text>Hello</Text>

        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Enter message's hash"
        />

        <TouchableOpacity style={styles.button} onPress={process}>
          <Text style={styles.buttonText}>Process</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Status: <Text>{Status}</Text></Text>
        <Text style={styles.text}>item_hash: <Text>{item_hash}</Text></Text>
        <Text style={styles.text}>Reception time: <Text>{Reception}</Text></Text>
        <Text style={styles.text}>Sender: <Text>{Sender}</Text></Text>
        <Text style={styles.text}>Chain: <Text>{Chain}</Text></Text>

        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});

