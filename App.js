import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './scenes/onboarding';
import Login from './scenes/login';
import Loading from './scenes/loading';
import Register from './scenes/register';
import MainTab from './scenes/tabs/mainTabs';
import './firebaseConfig'

export default function App() {

  const Stack = createStackNavigator();

  const AppStack = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}


