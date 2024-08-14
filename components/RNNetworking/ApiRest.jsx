import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'


export default function ApiRest() {
  const [postList, setPostList] = useState([])

  const fetchData = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json()

    setPostList(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <View style={styles.listContainer}>
      <FlatList data={postList} renderItem={({ item }) => {
        return (
          <View style={styles.card}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
          </View>
        )
      }}
        ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
        ListEmptyComponent={<Text style={styles.NoApi}>ALERTA: "No API Fount"</Text>}
        ListHeaderComponent={<Text style={styles.componentText}>--Post List--</Text>}
        ListFooterComponent={<Text style={styles.componentText}>End of List</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: '#666666'
  },
  componentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginVertical: 10
  },
  NoApi: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  }
})