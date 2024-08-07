import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function StatusBar() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }} >
      <StatusBar backgroundColor='green' barStyle='light-content' hidden />
    </View>
  )
}