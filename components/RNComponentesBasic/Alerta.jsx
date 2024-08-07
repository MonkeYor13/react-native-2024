import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function Alerta() {
  return (
    <View>
      <Button title='Ver Alerta' color={'green'} onPress={() => Alert.alert('dato invalido')} />

      <Button title='Ver Alert 2' color={'red'} onPress={() => Alert.alert('dato invalido', 'DBO incorrect!')} />

      <Button title='Ver Alert 3' color={'blue'}
        onPress={() =>
          Alert.alert(
            'dato invalido',
            'DBO incorrect!',
            [
              {
                text: 'Cancelar',
                onPress: () => console.log('cancelado')
              },
              {
                text: 'OK',
                onPress: () => console.log('OK')
              },
            ]
          )
        } />
    </View>
  )
}