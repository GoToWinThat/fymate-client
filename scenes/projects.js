import { Button, Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default Projects = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Projects" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Projects</Text>
            </Content>
        </Container>
    )
}
