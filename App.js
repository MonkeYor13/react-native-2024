import { StyleSheet, Text, View, ScrollView } from "react-native";
import Imagenes from "./components/Imagenes";
import Modales from "./components/Modales";
import Loading from "./components/Loading";
import Alerta from "./components/Alerta";
import PasarPrompt from "./components/PasarPrompt";
import Estilos from "./components/Estilos";
import AbsolutoYRelavito from "./components/AbsolutoYRelavito";
import DimensionesUI from "./components/DimensionesUI";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>React Native Course</Text>
      <ScrollView style={styles.scroll}>
        <Imagenes />
        <Modales />
        <Loading />
        <Alerta />
        <PasarPrompt name="Yorvis" />
        <Estilos />
        <AbsolutoYRelavito />
        <DimensionesUI />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  scroll: {},
});
