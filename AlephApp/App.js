import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
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
  const [text, setText] = useState('');

  const process = () => {
    console.log('Le texte entré est :', text);
  };

  // const { isDarkMode } = useTheme();
  
  return (
    // <ThemeProvider>
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

        <Text style={styles.text}>Status:</Text>
        <Text style={styles.text}>item_hash:</Text>
        <Text style={styles.text}>Reception time:</Text>
        <Text style={styles.text}>Sender:</Text>
        <Text style={styles.text}>Chain:</Text>

        <StatusBar style="auto"/>
        {/* <StatusBar style={isDarkMode ? 'light' : 'dark'} /> */}
      </View>
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
