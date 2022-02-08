import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import EventsScreen from './src/screens/events';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={SignInScreen} />
          <Stack.Screen options={{ headerShown: false }} name="EventsScreen" component={EventsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
// });
