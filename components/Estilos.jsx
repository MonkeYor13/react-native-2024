import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Estilos() {
  return (
    <View>
      <Text style={{ backgroundColor: 'red', width: 100, height: 100 }} >Estilo en linea</Text>

      <View style={estiloSheet.container}>
        <Text>Estilo Sheet</Text>
      </View>

      <View style={[estiloMultiple.pinkbg, estiloMultiple.box]}>
        <Text>Estilos multiples</Text>
      </View>

      <View style={[estiloMultiple.box, estiloMultiple.lightbluebg]}>
        <Text>Estilos multiples</Text>
      </View>

      <View style={[estiloMultiple.box, estiloMultiple.lightbluebg, estiloMultiple.androidShadow]}>
        <Text>Estilos Shadow y Elevation</Text>
      </View>
    </View>
  )
}


const estiloSheet = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid'
  }
});

//podemos usar multiples estilos dentro de una etiqueta
const estiloMultiple = StyleSheet.create({
  box: {
    width: 250,
    height: 250,
    padding: 10,
    marginTop: 5,
    borderRadius: 16,
  },
  pinkbg: {
    backgroundColor: 'pink'
  },
  lightbluebg: {
    backgroundColor: 'lightblue'
  },
  androidShadow: {
    elevation: 10,
    shadowColor: 'red'
  }

});