import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function DashboradScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboradScreen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Go Setting" onPress={() => navigation.jumpTo("Setting")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
