import { Button, Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import BaseForm from "../components/molecules/baseform"

export default General = ({ route, navigation }) => {
    const doc = route.params.doc;
    const general = route.params.info;

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const submitCallback = (baseFromResults) => {
        doc.update({
            "details.position": baseFromResults[0],
            company: baseFromResults[1],
            "details.starttime": baseFromResults[2].toString(),
            about: baseFromResults[3]
        })
    }

    return (
        <Container>
            <Header>
                <TopBar title="General" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <BaseForm defaults={{
                    first: general.details.position,
                    second: general.company,
                    desc: general.about
                }} submitCallback={submitCallback} placeholders={["Position", "Company", "About You"]} />
            </Content>
        </Container>
    )
}
