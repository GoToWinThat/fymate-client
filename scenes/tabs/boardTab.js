import { Button, Container, Content, Icon, Text } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Board from '../board'
import Offert from '../offert'
import Filters from '../filters'

export default BoardTab = ({ navigation }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Board" component={Board}/>
            <Stack.Screen name="Offert" component={Offert}/>
            <Stack.Screen name="Filters" component={Filters}/>
            <Stack.Screen name="Account" component={Account}/>
        </Stack.Navigator>
    )
}