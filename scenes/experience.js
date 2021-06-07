import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import ExperienceList from '../components/organisms/experienceList'
import Btn from '../components/atoms/btn'
import React from 'react'

//TODO: Deletion of experience 
export default Experience = ({ route, navigation }) => {
    const doc = route.params.doc
    const experience = route.params.info


    const submitCallback = (baseFromResults) => {
        const newElement = {
            company: baseFromResults[1],
            title: baseFromResults[0],
            time: baseFromResults[2].toString(), //TODO: this should be a time range
            url: "", //TODO: baseform does not support such field
            description: baseFromResults[3],
            location: "" //TODO: baseform does not support such field 
        }
        experience.push(newElement)
        doc.update({ experience: experience })
    }

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        navigation.navigate("EditPortfolio", { type: "experience", submitCallback: submitCallback })
    }

    return (
        <Container>
            <Header>
                <TopBar title="Experience" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <ExperienceList experience={experience} />
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