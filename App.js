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
// import CustomButton from "./components/CustomButtones/CustomButton";
import MiLista from "./components/RNList/MiLista";
import MiFlatList from "./components/RNList/MiFlatList";
import PokemonPadre from "./components/ExcercisePokemonCards/PokemonPadre";
import MiFormulario from "./components/RNForms/MiFormulario";
import MyLogin from "./components/RNForms/MyLogin";
import ApiRest from "./components/RNNetworking/ApiRest";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/RNNavegation/screens/HomeScreen";
import AboutScreen from "./components/RNNavegation/screens/AboutScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboradScreen from "./components/RNNavegation/screens/DashboardScreen";
import SettingScreen from "./components/RNNavegation/screens/SettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseList from "./components/RNNavegation/screens/CourseList";
import Profile from "./components/RNNavegation/screens/Profile";
import Reanimated from "./components/RNReanimated/Reanimated";

//AQUI ESTA LA FUNCION DE TODAS LA APP

export default function App() {
  //const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>React Native Course</Text>
      {/* <ScrollView style={styles.scroll}> */}
      {/* <CustomButton title={"Press me"} onPress={() => alert("Pressed")} />; */}
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
      {/* <MyLogin/> */}
      {/* <ApiRest /> */}
      <Reanimated/>
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

//AQUI INICIAMOS APRENDER LA NAVEGACION ENTRE PANTALLAS
// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         //aqui podemos hacer los estilos si queremos que todas las pantalla tenga el mismo estilo
//         screenOptions={{
//           headerStyle: { backgroundColor: "#6a51ae" },
//           headerTintColor: "white",
//           headerRight: () => (
//             <Pressable onPress={() => alert("Menu pressed!")}>
//               <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
//             </Pressable>
//           ),
//           //aqui aplicamos el color de content
//           contentStyle: {
//             backgroundColor: "#e8e4",
//           },
//         }}
//       >
//         {/* APREDERMOS LAS OPCIONES QUE TIENE STACK PARA MODIFICAR EL MISMO SOLAMENTE DE MANERA INDIVIDUAL */}
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: "Welcome Home",
//             headerStyle: { backgroundColor: "#6a51ae" },
//             headerTintColor: "white",
//             headerRight: () => (
//               <Pressable onPress={() => alert("Menu pressed!")}>
//                 <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
//               </Pressable>
//             ),
//             //aqui aplicamos el color de content
//             contentStyle: {
//               backgroundColor: "#e8e4",
//             },
//           }}
//         />

//         {/* EN ESTA SCREEN APREDNIMOS A PASAR DATOS ENTRE PANTALLAS */}
//         <Stack.Screen
//           name="About"
//           component={AboutScreen}
//           //aqui apredemos a pasar datos
//           initialParams={{
//             lastname: " Rodriguez",
//           }}
//           //PASAR PARAMENTROS DESDE APP PARA HOME Y DEL HOME AL ABOUT, PERO SEP UEDE OMITIR ESTE PASO E IR DIRECTO AL ABOUT USAR USELAYOUTEFFECT
//           // options={({route}) => ({
//           //   title: route.params.name2,
//           // })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//AQUI APREDENMOS CREAR EL DRAWER DE UNA PAGINA
// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen
//           name="Dashboard"
//           component={DashboradScreen}
//           options={{
//             title: "Mi Drawer", //aqui agregamos un nombre al header de ser necesario
//             drawerLabel: "Hola Yorvis", //aqui agremos un nombre al hedaer interno del drawer
//             drawerActiveTintColor: "green", //color a la texto header interno del drawer
//             drawerActiveBackgroundColor: "red", //color al fonde dle texto del header
//             drawerContentStyle: {
//               backgroundColor: "blue",
//             },
//           }}
//         />
//         <Drawer.Screen name="Setting" component={SettingScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

//AQUI APREDEMOS SOBRE TABS, SON LOS BOTONES DE MENU DEL FOOTER PARA NAVEGAR ENTRE ELLOS
// import Ionicons from "@expo/vector-icons/Ionicons";
// export default function App() {
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarLabelPosition: "below-icon", //solo para IOS
//           //tabBarShowLabel: false, //es para ocultar el nombre de los iconos, por default es true
//           tabBarActiveTintColor: "green", //color para el icono activo
//           tabBarInactiveTintColor: "red", //color para iconos inactivos
//         }}
//       >
//         <Tab.Screen
//           name="My Course List"
//           component={CourseList}
//           options={{
//             tabBarLabel: "Mi curso", //si queremos personalizar directamente el nombre del Tab
//             tabBarIcon: () => (
//               <Ionicons
//                 name="person"
//                 size={24}
//                 color="blue"
//                 // color={color} //lo hacemos asi si queremos que tenga el mismo color que se le asigno en la etiqueta Padre(Tab.Navigator), recuerda pasarlo como parametro entre corchete {color} en el tabBarIcon para que funcione.
//               />
//             ),
//             tabBarBadge: 3, //agregar un globo de notificacion de mensajes
//           }}
//         />
//         <Tab.Screen name="My Profile" component={Profile} />
//         <Tab.Screen name="My Setting" component={SettingScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

//AQUI APDRENDEMOS A COMBINAR TAB DENTRO DEL STACK
// function Home() {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator>
//       {/* RECUERDA QUE NO PUEDE LLAVAR EL MISMO NAME QUE EL STACK POR ESO COLOCAMOS (MYHOME) */}
//       <Tab.Screen name="MyHome" component={HomeScreen} />
//       <Tab.Screen name="Setting" component={SettingScreen} />
//     </Tab.Navigator>
//   );
// }
// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




