import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Platform,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";

import Imagenes from "./components/RNComponentesBasic/Imagenes";
import Modales from "./components/RNComponentesBasic/Modales";
import Loading from "./components/RNComponentesBasic/Loading";
import Alerta from "./components/RNComponentesBasic/Alerta";
import PasarPrompt from "./components/RNComponentesBasic/PasarPrompt";
import Estilos from "./components/RNComponentesBasic/Estilos";
import AbsolutoYRelavito from "./components/RNComponentesBasic/AbsolutoYRelavito";
import DimensionesUI from "./components/RNComponentesBasic/DimensionesUI";
import MyuseWindowDimensiones from "./components/RNComponentesBasic/MyuseWindowDimensiones";
import CustomButton from "./components/CustomButtones/CustomButton";
import MiLista from "./components/RNList/MiLista";
import MiFlatList from "./components/RNList/MiFlatList";
import PokemonPadre from "./components/ExcercisePokemonCards/PokemonPadre";
import MiFormulario from "./components/RNForms/MiFormulario";
import MyLogin from "./components/RNForms/MyLogin";

//
import { useState } from "react";


export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>React Native Course</Text>
      {/* <ScrollView style={styles.scroll}> */}
      {/* <CustomButton title={"Press me"} onPress={() => alert("Pressed")} /> */}
      {/* <Imagenes /> */}
      {/* <Modales /> */}
      {/* <Loading /> */}
      {/* <Alerta /> */}
      {/* <PasarPrompt name="Yorvis" /> */}
      {/* <Estilos /> */}
      {/* <AbsolutoYRelavito /> */}
      {/* <DimensionesUI /> */}
      {/* <MyuseWindowDimensiones /> */}
      {/* <PokemonPadre /> */}
      {/* <MiFlatList /> */}
      {/* <MiLista/> */}
      {/* <MiFormulario /> */}
      {/* </ScrollView> */}
      <MyLogin/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    //paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingTop: StatusBar.currentHeight,
  },
  titleText: {
    ...Platform.select({
      ios: {
        color: "yelow",
        fontSize: 24,
      },
      android: {
        color: "red",
        fontSize: 32,
        fontStyle: "italic",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
  scroll: {
    paddingHorizontal: 16,
  },
});
