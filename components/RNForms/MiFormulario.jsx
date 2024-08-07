import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function MiFormulario() {
  return (
    <View>
      <TextInput style={styles.input} />
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
});