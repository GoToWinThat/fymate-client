import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Board from './scenes/board'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './scenes/onboarding';
import Offert from './scenes/offert';
import Login from './scenes/login';
import Favorite from './scenes/favorite';
import Account from './scenes/account';
import Loading from './scenes/loading';
import Register from './scenes/register';
import firebaseConfig from './firebaseConfig';





export default function App() {

  const Stack = createStackNavigator();

  const AppStack = () => {
    return(
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Loading" component={Loading}/>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Offert" component={Offert} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Login" component={Login} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Favorite" component={Favorite} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Account" component={Account} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Board" component={Board} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Register" component={Register} options={{headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}


