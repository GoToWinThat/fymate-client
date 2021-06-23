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
        console.log(r)
        doc.update({
            name: r.name,
            surname: r.surname,
            about: r.description,
            location: r.location,
            "contacts.phone": r.phone,
            "contacts.site": r.site,
            "details.position": r.position,
            "details.salary": r.salary,
            "details.company": r.company
        }).then(
            navigation.goBack()
        )
    }

    return (
        <Container>
            <Header>
                <TopBar title="General" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <GeneralForm defaults={general} submitCallback={submitCallback} />
            </Content>
        </Container>
    )
}
