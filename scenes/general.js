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

    const submitCallback = (r) => {
        doc.update({
            about: r.description,
            location: r.location,
            "contacts.phone": r.phone,
            "contacts.site": r.link,
            "details.position": r.position,
            "details.salary": r.salary,
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
