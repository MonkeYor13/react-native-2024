import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator, StatusBar, TextInput, Button } from 'react-native'



export default function ApiRest() {
  const [postList, setPostList] = useState([])  // useState de la lista
  const [isLoading, setIsLoading] = useState(true)  // useState del loding
  const [refreshing, setRefreshing] = useState(false)  // useState de el refresco de la pagina para cargar mas informacion

  //crear post 
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')


  //funcion para llamar API
  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError('')
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setError('Failed to fetch post list')
    }
  };

  //useEffect para hacerla asincronas
  useEffect(() => {
    fetchData()
  }, [])

  //se crea una loading de carga de informacion
  if (isLoading) {
    return (
      <SafeAreaView style={styles.isLoading}>
        <ActivityIndicator size='large' color='#40ff00' />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  //se crea funcion para el refresh de la pagina para que cargue mas opciones
  const handleReflesh = () => {
    setRefreshing(true)
    // fetchData(20)
    // setRefreshing(false)
    fetchData(20).finally(() => setRefreshing(false)); //mas corto el codigo
  }

  //creamos la funcion de los input y el bton para agregarlo a la lista de la Api
  const addPost = async () => {
    setIsPosting(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Método HTTP incorrecto (debería ser 'POST')
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
          userId: 21,
        })
      });

      const newPost = await response.json();

      // Aquí, actualizamos la Lista 
      setPostList([newPost, ...postList]);

      // Limpiar los campos
      setPostTitle('')
      setPostBody('')
      setIsPosting(false)
      setError('')
    } catch (error) {
      console.error('Error adding new post:', error)
      setError('Failed to add new post')
    }
  }

  return (
    error ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    ) : (
      <>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Post Title' value={postTitle} onChangeText={setPostTitle} />
          <TextInput style={styles.input} placeholder='Post Body' value={postBody} onChangeText={setPostBody} />
          <Button
            title={isPosting ? 'Adding' : 'Add Post'}
            onPress={addPost}
            disabled={isPosting}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem={({ item }) => {
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
            refreshing={refreshing}
            onRefresh={handleReflesh}
          />
        </View>
      </>
    )
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
  },
  isLoading: {
    flex: 1,
    backgroundColor: '#6363b2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    backgroundColor: 'blue',
    marginHorizontal: 16,
    padding: 16
  },
  input: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  errorContainer: {
    backgroundColor: '#ffc0cb',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center'
  },
  errorText: {
    color: '#d8000c',
    fontSize: 16,
    textAlign: 'center'
  },
})