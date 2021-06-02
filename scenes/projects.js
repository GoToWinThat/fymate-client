import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import {default as ProjectList} from '../components/atoms/projects'
import Btn from '../components/atoms/btn'

export default Projects = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        console.log('Add projekt')
    }

    const projects = [
        {
          id: 0,
          taglist: ["C#", "C++", "Swift"],
          title: "WeatherApp",
          description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this.",
        },
        {
          id: 1,
          taglist: ["JavaScript", "C#"],
          title: "WeatherApp",
          description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this.",
        },
        {
          id: 2,
          taglist: ["C#", "C++", "Swift"],
          title: "WeatherApp",
          description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this.",
        },
      ]
      

    return (
        <Container>
            <Header>
                <TopBar title="Projects" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <ProjectList projects={projects}/>
                <View style={styles.btnView}>
                    <Btn icon="add" text="Add New" onPress={onClickAdd}/>
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