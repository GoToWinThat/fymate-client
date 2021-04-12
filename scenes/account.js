import { Container, Content, Header } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import Accountheader from '../components/atoms/accountheader'

export default Account = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Accountheader onClickGoBack={onClickGoBack}/>

            <Content>

            </Content>
        </Container>
    )
}
