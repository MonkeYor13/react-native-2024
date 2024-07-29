import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { useState } from "react";



export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>

    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 60,
  },
});
