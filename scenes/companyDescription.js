import { Header ,Container, Content, Icon, Text, View } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default CompanyDescription = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Company Description" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Company Description</Text>
            </Content>
        </Container>
    )
}

