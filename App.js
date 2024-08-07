import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Platform,
  StatusBar,
  FlatList,
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
//import CustomButton from "./components/CustomButtones/CustomButton";
import PokemonCard from "./components/ExcercisePokemonCards/PokemonCard";
import pokemonList from "./components/RNList/data.json";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl"],
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

      {/* ESTOS SON LOS OCMPONENTES PRINCIPALES EN RN */}

      {/* <ScrollView style={styles.scroll}>
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
      </ScrollView> */}

      {/* ESTO ES LA PARTE DE LAS CARD POKEMON */}
      {/* <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
       */}

      {/* ESTE APARTADO DE LA LISTAS */}
      <ScrollView style={styles.scroll}>
        {/* USANDO LIST PERO YA NO RECOMENDABLE */}

        {/* {pokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.cardList}>
              <Text>{pokemon.type}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          );
        })} */}

        {/* USAMOS FLATlIST ES LA QUE DEBEMOS USAR PORQUE YA 
        TIENE UN RENDER ITEM Y UNA DATA COMO ARGUMENTO*/}

        <FlatList
          data={pokemonList}
          //data={[]} para ver le mensaje cuando no funciona la lista
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.cardList}>
                <Text>{item.type}</Text>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          //horizontal
          //keyExtractor={(item, index) => item.id.toString()}

          //  PARA SEPAR LAS CARD SI NO SE QUIERE UNAR EN LOS ESTILOS EL MARGINBOTTON
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          //  AVISO CUANDO LA LISTA NO REGRESA NADA O FALLA, para ver si funciona debemos uetar la lista de data y agregar a dentro []
          ListEmptyComponent={
            <Text>La lista esta fallando o no hay datos en la lista</Text>
          }
          // PARA AGREGAR UN HAEDAR A LA LISTA
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          //PARA AGREGAR UNA FOOTER A LA LISTA, para verlo tenemos que ir hasta el final de todos los itemsa
          ListFooterComponent={
            <Text style={styles.footerText}>Final de la lista</Text>
          }
        />
      </ScrollView>
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
  cardList: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    //marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    marginTop: 12
  },
});
