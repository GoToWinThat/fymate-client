import { Button, Header ,Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import {default as EducationList} from '../components/atoms/educations'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Btn from '../components/atoms/btn'

export default Education = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        navigation.navigate("EditPortfolio")
    }
    const education = [
        {
          id: 0,
          education: "University of Noise",
          time: "07.12-04.13",
          location: "Warszawa"
        },
        {
          id: 1,
          education: "University of Colorado",
          time: "07.12-04.13",
          location: "Warszawa"
        },
    ]

    return (
        <Container>
            <Header>
                <TopBar title="Education" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <EducationList education={education}/>
                <View style={styles.btnView}>
                    <Btn onPress={onClickAdd} icon="add" text="Add New"/>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    btnView:{
        paddingVertical: 20,
        paddingHorizontal: 10
    }
})