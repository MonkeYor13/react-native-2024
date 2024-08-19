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
  Pressable,
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
import ApiRest from "./components/RNNetworking/ApiRest";
//import { useState } from "react";

//AQUI ESTA LA FUNCION DE TODAS LA APP

// export default function App() {
//   //const [name, setName] = useState("");
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titleText}>React Native Course</Text>
//       {/* <ScrollView style={styles.scroll}> */}
//       {/* <CustomButton title={"Press me"} onPress={() => alert("Pressed")} /> */}
//       {/* <Imagenes /> */}
//       {/* <Modales /> */}
//       {/* <Loading /> */}
//       {/* <Alerta /> */}
//       {/* <PasarPrompt name="Yorvis" /> */}
//       {/* <Estilos /> */}
//       {/* <AbsolutoYRelavito /> */}
//       {/* <DimensionesUI /> */}
//       {/* <MyuseWindowDimensiones /> */}
//       {/* <PokemonPadre /> */}
//       {/* <MiFlatList /> */}
//       {/* <MiLista/> */}
//       {/* <MiFormulario /> */}
//       {/* </ScrollView> */}
//       {/* <MyLogin/> */}
//       <ApiRest />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     //paddingTop: Platform.OS === "android" ? 25 : 0,
//     paddingTop: StatusBar.currentHeight,
//   },
//   titleText: {
//     ...Platform.select({
//       ios: {
//         color: "yelow",
//         fontSize: 24,
//       },
//       android: {
//         color: "red",
//         fontSize: 32,
//         fontStyle: "italic",
//       },
//     }),
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   scroll: {
//     paddingHorizontal: 16,
//   },
// });

//AQUI INICIAMOS APRENDER LA NAVEGACION ENTRE PANTALLAS

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/RNNavegation/screens/HomeScreen";
import AboutScreen from "./components/RNNavegation/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        //aqui podemos hacer los estilos si queremos que todas las pantalla tenga el mismo estilo
        screenOptions={{
          headerStyle: { backgroundColor: "#6a51ae" },
          headerTintColor: "white",
          headerRight: () => (
            <Pressable onPress={() => alert("Menu pressed!")}>
              <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          //aqui aplicamos el color de content
          contentStyle: {
            backgroundColor: "#e8e4",
          },
        }}
      >
        {/* APREDERMOS LAS OPCIONES QUE TIENE STACK PARA MODIFICAR EL MISMO SOLAMENTE DE MANERA INDIVIDUAL */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "#6a51ae" },
            headerTintColor: "white",
            headerRight: () => (
              <Pressable onPress={() => alert("Menu pressed!")}>
                <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            //aqui aplicamos el color de content
            contentStyle: {
              backgroundColor: "#e8e4",
            },
          }}
        />

        {/* EN ESTA SCREEN APREDNIMOS A PASAR DATOS ENTRE PANTALLAS */}
        <Stack.Screen
          name="About"
          component={AboutScreen}
          //aqui apredemos a pasar datos
          initialParams={{
            lastname: " Rodriguez",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
