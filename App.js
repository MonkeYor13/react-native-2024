import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Platform,
} from "react-native";
import Imagenes from "./components/Imagenes";
import Modales from "./components/Modales";
import Loading from "./components/Loading";
import Alerta from "./components/Alerta";
import PasarPrompt from "./components/PasarPrompt";
import Estilos from "./components/Estilos";
import AbsolutoYRelavito from "./components/AbsolutoYRelavito";
import DimensionesUI from "./components/DimensionesUI";
import MyuseWindowDimensiones from "./components/MyuseWindowDimensiones";
import CustomButton from "./components/CustomButtones/CustomButton";
import PokemonCard from "./components/ExcercisePokemonCards/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>React Native Course</Text>
      <ScrollView style={styles.scroll}>
        <CustomButton title={"Press me"} onPress={() => alert("Pressed")} />
        <Imagenes />
        <Modales />
        <Loading />
        <Alerta />
        <PasarPrompt name="Yorvis" />
        <Estilos />
        <AbsolutoYRelavito />
        <DimensionesUI />
        <MyuseWindowDimensiones />
      </ScrollView>

      {/* <PokemonCard {...charmanderData}/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
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
});
