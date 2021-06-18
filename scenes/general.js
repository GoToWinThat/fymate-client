import { Button, Header, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import GeneralForm from "../components/molecules/generalForm"

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
                <GeneralForm defaults={{
                    first: general?.details?.position,
                    second: general.company,
                    desc: general.about
                }} submitCallback={submitCallback} />
            </Content>
        </Container>
    )
}
