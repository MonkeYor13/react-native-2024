
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import pokemonList from "./data.json";

//LIST YA NO RECOMENDABLE 

export default function MiLista() {
  return (
    <ScrollView style={styles.scroll}>

      {pokemonList.map((pokemon) => {
        return (
          <View key={pokemon.id} style={styles.cardList}>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 16,
  },
  cardList: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
});
