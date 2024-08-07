import { View, Text, StyleSheet, FlatList } from 'react-native'
import pokemonList from './data.json'
//USAMOS FLATlIST ES LA QUE DEBEMOS USAR PORQUE YA 
//TIENE UN RENDER ITEM Y UNA DATA COMO ARGUMENTO

export default function MiFlatList() {
  return (

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

      // PARA AGREGAR UNA FOOTER A LA LISTA, para verlo tenemos que ir hasta el final de todos los itemsa
      ListFooterComponent={
        <Text style={styles.footerText}>Final de la lista</Text>
      }
    />
  )
}

const styles = StyleSheet.create({
  cardList: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    //marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    marginTop: 12,
  },
});