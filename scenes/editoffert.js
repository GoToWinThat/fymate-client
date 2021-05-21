import { Button,Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default EditOffert = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Edit Offert" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Edit Offert</Text>
            </Content>
        </Container>
    )
}
