import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './assets/pages/Home';
import Add from './assets/pages/Add';
import Cost from './assets/pages/Cost';
import Show from './assets/pages/Show';
import Contact from './assets/pages/Contact';
import { Link } from "expo-router";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Material from './assets/pages/Material';
// import Material from './assets/pages/Material';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Contact" component={Contact} />

        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="Cost" component={Cost} />
        <Stack.Screen name="Material" component={Material} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
