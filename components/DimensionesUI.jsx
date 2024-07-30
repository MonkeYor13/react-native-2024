import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function DimensionesUI() {
  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.text}>Dimensiones con %</Text>
      </View>

      <View style={styles.dimensiones}>
        <Text style={styles.text}>usando Dimensions</Text>
      </View>
    </View>
  )
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    height: 300,
    justifyContent:'center'
  },
  box: {
    backgroundColor: 'blue',
    width: '70%',
    height: '40%',
    justifyContent:'center'
  },
  text: {
    fontSize: windowWidth > 500 ? 48 : 24,
    color: 'white',
    textAlign: 'center',
  }, 
  dimensiones:{
    backgroundColor: 'red',
    width: windowWidth > 500 ? '40%' : '90%',
    height: windowHeight > 600 ? '40%' : '90%',
    justifyContent:'center'
  }
})