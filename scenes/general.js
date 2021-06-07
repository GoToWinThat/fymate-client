import { Button,Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import BaseForm from "../components/molecules/baseform"

export default General = ({ route, navigation }) => {
    const doc = route.params.doc;


    const onClickGoBack = () => {
        navigation.goBack();
    }

    const submitCallback = (baseFromResults) => 
    {
        
    }

    return (
        <Container>
            <Header>
                <TopBar title="General" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <BaseForm submitCallback={submitCallback} placeholders={["Position","Company","About You"]}/>
            </Content>
        </Container>
    )
}
