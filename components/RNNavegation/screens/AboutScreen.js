import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route, navigation }) {
  const { name, lastname } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        AboutScreen
        {name}
        {lastname}
      </Text>
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: " Jesus",
          })
        }
      />
      <Button
        title="Go back with data"
        onPress={() => navigation.navigate("Home",{resultado: 'Regresamos a la data'})}
      />
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
