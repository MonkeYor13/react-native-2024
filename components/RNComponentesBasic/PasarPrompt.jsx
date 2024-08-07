import { View, Text } from 'react-native'
import React from 'react'

export default function PasarPrompt({name}) {
  return (
    <View>
      <Text>Hola soy {name} y paso los datos desde el Componente Padre</Text>
    </View>
  )
}