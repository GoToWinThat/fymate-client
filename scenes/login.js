import { Button, Container, Content, Header, Left, Title } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'

export default Login = ({ navigation }) => {
    
    const onClickSingIn = () => {
        navigation.navigate('Board', {
            screen: 'Board'
        })
    }

    return (
        <Container>
            <Header>
                <Title>Login</Title>
            </Header>
            <Content>
                <Button onPress={() => onClickSingIn()}><Text>Sign In</Text></Button>
                <Button><Text>Sign Up</Text></Button>
            </Content>
        </Container>
    )
}
