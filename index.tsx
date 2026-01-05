

import React from 'react';
import { Text, View,Image } from 'react-native';
import Home from './Home'
import Splace from './Splace_screen.jsx';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function HomeScreen() {
  return (
    <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splace} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

    </>

  
  );
}

