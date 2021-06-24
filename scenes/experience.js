import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import ExperienceList from '../components/organisms/experienceList'
import Btn from '../components/atoms/btn'
import React, { useState } from 'react'

//TODO: Deletion of experience 
export default Experience = ({ route, navigation }) => {
    const doc = route.params.doc
    const [experience, setExperience] = useState(route.params.info)

    const submitCallback = (result) => {
        const newElement = {
            company: result.company,
            title: result.title,
            date: result.date,
            url: "", //TODO: baseform does not support such field
            description: result.description,
            location: "" //TODO: baseform does not support such field 
        }
        experience.push(newElement)
        doc.update({ experience: experience })
        setExperience([...experience])
        navigation.goBack();
    }

    const updateCallback = (result, idx) => {
        const newElement = {
            company: result.company,
            title: result.title,
            date: result.date,
            url: "", //TODO: baseform does not support such field
            description: result.description,
            location: "" //TODO: baseform does not support such field 
        }
        experience[idx] = newElement;
        doc.update({ experience: experience })
        setExperience([...experience])
        navigation.goBack();
    }

    const deleteCallback = (idx) => {
        experience.splice(idx, 1)
        doc.update({ experience: experience })
        setExperience([...experience])
        navigation.goBack()
    }

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        navigation.navigate("EditPortfolio", { type: "experience", submitCallback: submitCallback })
    }

    const onClickListElement = (exp, idx) => {
        navigation.navigate("EditPortfolio", { type: "experience", defaults: exp, idx: idx, submitCallback: updateCallback, deleteCallback: deleteCallback })
    }



    return (
        <Container>
            <Header>
                <TopBar title="Experience" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <ExperienceList experience={experience} onListElementClicked={onClickListElement} />
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