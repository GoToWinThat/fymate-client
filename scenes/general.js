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

    //TODO: Przesłane masz jako obiekt, nie wiem jak zrobić update więc to zostawiam tobie
    const submitCallback = (baseFromResults) => {
        doc.update({
            "details.position": baseFromResults[0],
            company: baseFromResults[1],
            "details.starttime": baseFromResults[2].toString(),
            about: baseFromResults[3]
        })
        navigation.goBack();
    }

    console.log(general)
    return (
        <Container>
            <Header>
                <TopBar title="General" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <GeneralForm defaults={{
                    phone: general?.details?.position,
                    place: general.company,
                    desc: general.about,
                    link: general.link,
                }} submitCallback={submitCallback} />
            </Content>
        </Container>
    )
}
