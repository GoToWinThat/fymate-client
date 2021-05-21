import { Button, Container,Header, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default ChangePassword = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Change Password" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of ChangePassword</Text>
            </Content>
        </Container>
    )
}
