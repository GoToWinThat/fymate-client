import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import EducationList from '../components/organisms/educationList'
import React, { useState } from 'react'
import TopBar from '../components/atoms/topbar'
import Btn from '../components/atoms/btn'

export default Education = ({ route, navigation }) => {
    const doc = route.params.doc
    const [education, setEducation] = useState(route.params.info)

    const submitCallback = (result) => {
        const newElement = {
            university: result.university,
            place: result.place,
            date: result.date,
            description: result.description
        }
        education.push(newElement)
        doc.update({ education: education })
        setEducation([...education])
    }

    const updateCallback = (result, idx) => {
        const newElement = {
            university: result.university,
            place: result.place,
            date: result.date,
            description: result.description
        }
        education[idx] = newElement;
        doc.update({ education: education })
        setEducation([...education])
    }

    const deleteCallback = (idx) => {
        education.splice(idx, 1)
        doc.update({ education: education })
        setEducation([...education])
    }

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        navigation.navigate("EditPortfolio", { type: "education", submitCallback: submitCallback })
    }

    const onClickListElement = (edu, idx) => {
        navigation.navigate("EditPortfolio", { type: "education", defaults: edu, idx: idx, submitCallback: updateCallback, deleteCallback: deleteCallback })
    }

    return (
        <Container>
            <Header>
                <TopBar title="Education" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <EducationList education={education} onListElementClicked={onClickListElement} />
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