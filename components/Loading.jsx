import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={{ backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator size={'large'} />
      <ActivityIndicator size={'large'} color="red" />
      <ActivityIndicator size={'large'} color="red" animating={false} />
    </View>
  )
}