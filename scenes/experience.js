import { Button,Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'

export default Experience = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Experience" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Experience  TODO: add nav to edit experience screen</Text>
            </Content>
        </Container>
    )
}
