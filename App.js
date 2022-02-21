import { React } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import EventsScreen from './src/screens/events';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator options={{ headerShown: false }}>
          <Stack.Screen name="Login" component={SignInScreen} />
          <Stack.Screen name="EventsScreen" component={EventsScreen} />
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
