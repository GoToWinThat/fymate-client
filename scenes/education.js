import { Button, Header ,Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default Education = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Education" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Profile There is a list</Text>
            </Content>
        </Container>
    )
}
