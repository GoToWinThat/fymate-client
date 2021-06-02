import { Button, Container, Content, Icon, Text } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Favorite from '../favorite'
import Offert from '../offert'
import Filters from '../filters'

export default FavoriteTab = ({ navigation }) => {

    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Favorite" component={Favorite}/>

            <Stack.Screen name="Offert" component={Offert}/>

            <Stack.Screen name="Filters" component={Filters}/>
        </Stack.Navigator>
    )
}