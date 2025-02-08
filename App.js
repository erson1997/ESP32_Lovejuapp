import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const apiUrl = `https://blynk.cloud/external/api/update?token=7R7BgNSE5pcdw6fVSJGZt9QhZhFT5wh9&V1=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        alert('Zpráva odeslána!');
      } else {
        alert('Chyba při odesílání!');
      }
    } catch (error) {
      alert('Chyba připojení: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Odeslat zprávu do ESP32</Text>
      <TextInput
        style={styles.input}
        placeholder="Zadejte zprávu"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Odeslat" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: { width: '80%', borderWidth: 1, padding: 10, marginBottom: 10 },
});
