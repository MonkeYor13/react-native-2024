import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AbsolutoYRelavito() {
  return (
    <View style={styles.box}>
      <View style={{
        backgroundColor: 'green', width: 100,
        height: 100, top: 100, left: 90
      }}>
        <Text>Box1</Text>
      </View>
      <View style={{
        backgroundColor: 'red', width: 100,
        height: 100,
      }}>
        <Text>Box2</Text>
      </View>
      <View style={{
        backgroundColor: 'blue', width: 100,
        height: 100,
      }}>
        <Text>Box3</Text>
      </View>
      <View style={{
        backgroundColor: 'green', width: 100,
        height: 100, position: 'absolute', bottom: 150, 
      }}>
        <Text>Box4</Text>
      </View>
      <View style={{
        backgroundColor: 'yellow', width: 100,
        height: 100,
      }}>
        <Text>Box5</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    marginTop: 10
  },

})