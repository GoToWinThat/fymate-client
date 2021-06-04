import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './scenes/onboarding';
import Login from './scenes/login';
import Loading from './scenes/loading';
import Register from './scenes/register';
import MainTab from './scenes/tabs/mainTabs';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import materialDark from './native-base-theme/variables/materialDark';
import { StyleProvider } from 'native-base'


//TODO: Create and update state with darkmode. Update hould bo in Profile screen in switch.
export default function App({ navigation }) {

  const Stack = createStackNavigator();

  const AppStack = () => {

    return(
      <Stack.Navigator headerMode='none'>

        <Stack.Screen name="MainTab" component={MainTab} />

        <Stack.Screen name="Loading" component={Loading}/>

        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
  }

  return (
    <StyleProvider style={darkmode ? getTheme(materialDark) : getTheme(material)}>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </StyleProvider>
  );
}


