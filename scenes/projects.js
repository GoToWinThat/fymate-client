import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import ProjectList from '../components/organisms/projectList'
import Btn from '../components/atoms/btn'

export default Projects = ({ route, navigation }) => {
    const doc = route.params.doc
    const projects = route.params.info



    const submitCallback = (baseFromResults) => {
        const newElement = {
            location: baseFromResults[1],
            place: baseFromResults[0],
            time: baseFromResults[2].toString(),
            description: baseFromResults[3] //TODO: this is never used
        }
        projects.push(newElement)
        doc.update({ education: projects })
    }

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        navigation.navigate("EditPortfolio", { type: "project", submitCallback: submitCallback })
    }

    return (
        <Container>
            <Header>
                <TopBar title="Projects" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <ProjectList projects={projects} />
                <View style={styles.btnView}>
                    <Btn icon="add" text="Add New" onPress={onClickAdd} />
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