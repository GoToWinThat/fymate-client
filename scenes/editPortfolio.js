import { Button, Container, Content, Header, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default EditPortfolio = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar onClickGoBack={onClickGoBack} title="Edit"/>
            </Header>
            <Content>
                <Text>There is content of Edit Portfolio</Text>
            </Content>
        </Container>
    )
}
