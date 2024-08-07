import { View, Text, Image } from 'react-native'
import React from 'react'
import icon from "../../assets/icon.png"
const logo = require('../../assets/florida.png')


export default function Imagenes() {
  return (
    <View>
      <Text>Tipos de imagenes</Text>
      <Image source={icon} style={{ width: 100, height: 100 }} />
      <Image source={logo} style={{ width: 100, height: 100 }} />
    </View>
  )
}