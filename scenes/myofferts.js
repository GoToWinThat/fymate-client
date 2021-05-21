import { Button,Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default MyOfferts = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="My Offerts" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of My Offers</Text>
            </Content>
        </Container>
    )
}
