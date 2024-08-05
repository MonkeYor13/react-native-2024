import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

export default function MyuseWindowDimensiones() {
  
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ancho: {width}</Text>
      <Text style={styles.text}>Altura: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});