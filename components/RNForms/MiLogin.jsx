import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function MiLogin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} />
      <Button title='Login' />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#9a9a9a',
    borderWidth: 1,
    marginBottom: 20
  },
})