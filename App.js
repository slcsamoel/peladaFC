import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './src/pages/TelaInicial';
import Pelada from './src/pages/Pelada';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={TelaInicial}/>
          <Stack.Screen name='Pelada' component={Pelada} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6FBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
