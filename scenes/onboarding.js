import { Button } from 'native-base';
import React from 'react'
import { View, Text } from 'react-native'

export default Onboarding = ({ navigation }) => {

    const onClickChangeView = () => {
        navigation.navigate('Login', {
            screen: 'Login',
        })
    }

    return (
        <View>
            <Button onPress={() => onClickChangeView()}><Text>Next</Text></Button>
        </View>
    )
}
