import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import EducationList from '../components/organisms/educationList'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Btn from '../components/atoms/btn'

export default Education = ({ route, navigation }) => {
    const doc = route.params.doc
    const education = route.params.info



    const submitCallback = (baseFromResults) => {
        const newElement = {
            location: baseFromResults[1],
            place: baseFromResults[0],
            time: baseFromResults[2].toString(),
            description: baseFromResults[3] //TODO: this is never used
        }
        education.push(newElement)
        doc.update({ education: education })
    }

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        navigation.navigate("EditPortfolio", { type: "education", submitCallback: submitCallback })
    }



    return (
        <Container>
            <Header>
                <TopBar title="Education" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <EducationList education={education} />
                <View style={styles.btnView}>
                    <Btn onPress={onClickAdd} icon="add" text="Add New" />
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    btnView: {
        paddingVertical: 20,
        paddingHorizontal: 10
    }
})