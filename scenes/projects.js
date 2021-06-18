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
            title: baseFromResults[0],
            description: baseFromResults[1],
            tags: baseFromResults[2]
        }
        projects.push(newElement)
        doc.update({ projects: projects })
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