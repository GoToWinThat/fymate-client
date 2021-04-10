import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Board from './scenes/board'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './scenes/onboarding';
import Offert from './scenes/offert';
import Login from './scenes/login';
import Favorite from './scenes/favorite';
import Account from './scenes/account';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding}/>
        <Stack.Screen name="Offert" component={Offert}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Favorite" component={Favorite}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Board" component={Board}/>
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
