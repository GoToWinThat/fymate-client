import { Button } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'

export default Login = ({ navigation }) => {
    
    const onClickSingIn = () => {
        navigation.navigate('Board', {
            screen: 'Board'
        })
    }

    return (
        <View>
            <Button onPress={() => onClickSingIn()}><Text>Sign In</Text></Button>
            <Button><Text>Sign Up</Text></Button>
        </View>
    )
}
