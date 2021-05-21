import { Button, Container, Content, Header, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default Filters = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Filters" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Filters</Text>
            </Content>
        </Container>
    )
}
