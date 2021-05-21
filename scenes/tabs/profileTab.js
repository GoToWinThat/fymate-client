import { Button, Container, Content, Icon, Text } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Profile from '../profile'
import Account from '../account'
import General from '../general'
import Experience from '../experience'
import EditExperience from '../editExperience'
import Projects from '../projects'
import Education from '../education'
import Filters from '../filters'
import ChangePassword from '../changePassword'
import MyOfferts from '../myofferts'
import EditOffert from '../editoffert'

export default ProfileTab = ({ navigation }) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Account" component={Account}/>
            <Stack.Screen name="General" component={General}/>
            <Stack.Screen name="Experience" component={Experience}/>
            <Stack.Screen name="EditExperience" component={EditExperience}/>
            <Stack.Screen name="Projects" component={Projects}/>
            <Stack.Screen name="Education" component={Education}/>
            <Stack.Screen name="Filters" component={Filters}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            <Stack.Screen name="MyOfferts" component={MyOfferts}/>
            <Stack.Screen name="EditOffert" component={EditOffert}/>
        </Stack.Navigator>
    )
}
