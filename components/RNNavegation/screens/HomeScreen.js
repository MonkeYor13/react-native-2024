import { View, Text, StyleSheet, Button } from "react-native";
// puedo usar tambien le hook de navigation improtando useNavigation, recuerda quitar le navigacion {navigation} dentro de los props y usar el hook
// import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation, route }) {
  // const navigation = useNavigation(); //usamos el hook cuendo no lo colocamos dentro del props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to AboutScreen"
        //pasar datos desde una screen a otro entre {name:}
        onPress={() =>
          navigation.navigate("About", {
            name: " Yorvis",
          })
        }
      />
      <Text style={styles.text}>{route.params?.resultado}</Text>
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
