import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const process = () => {
  console.log('Le texte entré est :', text);
};

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Entrez votre texte ici"
      />

      <TouchableOpacity style={styles.button} onPress={process}>
        <Text style={styles.buttonText}>Appuyez ici</Text>
      </TouchableOpacity>
        <Text style={styles.buttonText}>Appuyez ici</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
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
  });