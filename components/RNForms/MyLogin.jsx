import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, KeyboardAvoidingView, Platform } from 'react-native'
import imagen from '../../assets/adaptive-icon.png'

export default function MyLogin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 200}
    >
      <View style={styles.form}>
        <Image source={imagen} style={styles.imagen} />
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder='Enter your Username' value={username} onChangeText={setUsername} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter your Password' value={password} onChangeText={setPassword} secureTextEntry />
        <Button title='Login' />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
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
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  imagen: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  }
})