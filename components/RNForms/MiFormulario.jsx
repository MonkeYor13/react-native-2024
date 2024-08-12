import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Switch } from 'react-native'


export default function MiFormulario() {

  const [name, setName] = useState('')

  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <View>
      <TextInput style={styles.input}
        value={name} //valor con el ue inicia el estado
        onChangeText={setName} //setea el estado 
        placeholder='email@example.com.ar'
        secureTextEntry //solo la agregamos y listo ya activa modo seguridad al escribir
        //keyboardType='numeric' //activar teclado numerico
        autoCorrect={false}
        autoCapitalize='none'
      />

      <TextInput style={[styles.input, styles.multilineText]}
        placeholder='Message'
        multiline //activar le multilinea en un input
      />

      <Text style={styles.text}> My name is {name}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchtext}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: 'red', true: 'green' }} //cambiar los oclores dentro del switch
          thumbColor='blue' //cambiar le color del circulo del boton del switch
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    height: 40,
    margin: 12,
    padding: 10,
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
  multilineText: {
    minHeight: 50,
    textAlignVertical: 'top'

  },
  switchContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  switchtext: {
    fontSize: 20
  }

});