import { Button,Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import BaseForm from "../components/molecules/baseForm"

export default General = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="General" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <BaseForm placeholders={["Position","Company","About You"]}/>
            </Content>
        </Container>
    )
}
