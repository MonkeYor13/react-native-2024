import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CourseList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>
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
