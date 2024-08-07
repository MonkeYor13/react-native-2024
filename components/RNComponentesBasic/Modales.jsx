import { View, Text, Button, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Modales() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      <Button
        title="Presiona aqui ver modal"
        onPress={() => setIsModalVisible(true)}
        color={"green"}
      />
      <Modal
        visible={isModalVisible}
        animationType="fade"
      >
        <View style={styles.container}>
          <Text>Contenido del modal</Text>
          <Button
            title="cerrar modal"
            onPress={() => setIsModalVisible(false)}
            color={"red"}
          />
        </View>
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 60,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});