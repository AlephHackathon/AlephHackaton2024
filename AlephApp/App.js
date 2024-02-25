import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios'
import { importAccountFromPrivateKey } from '@aleph-sdk/ethereum';
import { TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
// import { ThemeProvider, useTheme } from './ThemeContext';

// function ThemeSwitch() {
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <View style={styles.themeSwitch}>
//       <Text style={styles.text}>Thème {isDarkMode ? 'sombre' : 'clair'}</Text>
//       <Button title="Changer de thème" onPress={toggleTheme} />
//     </View>
//   );
// }

export default function App() {
  //const account = getAccountFromProvider(window.ethereum);
//
  //// initialize the wallet
  //account.init();
//
  //// increase a flow (in ALEPH/hour)
  //const receiver = "12399e820b4341c6d0d5bb916ad2fa2004fd51ee0a6dc4890fa62cd73dd505a1";
  //account.increaseALEPHFlow(receiver, 1);
//
  //// get the net flow of ALEPH/hour
  //const flow = account.getALEPHFlow();  var [text, setText] = useState('');
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

  // const { isDarkMode } = useTheme();
  
  return (
    // <ThemeProvider>
    <ScrollView>
      <View style={styles.container}>
      {/* <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}> */}
        {/* <ThemeSwitch/> */}
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

        <Text style={styles.text}>Status: {Status}</Text>
        <Text style={styles.text}>item_hash: {item_hash}</Text>
        <Text style={styles.text}>Reception time: {Reception}</Text>
        <Text style={styles.text}>Sender: {Sender}</Text>
        <Text style={styles.text}>Chain: {Chain}</Text>

        <StatusBar style="auto"/>
        {/* <StatusBar style={isDarkMode ? 'light' : 'dark'} /> */}
      </View>
    /</ScrollView>
    // </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
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
  themeSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
