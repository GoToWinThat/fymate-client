import { Button,Header, Container, Content, Icon, Text , View} from 'native-base'
import { StyleSheet } from 'react-native'
import {default as ExperienceList} from '../components/atoms/experience'
import Btn from '../components/atoms/btn'
import React from 'react'

export default Experience = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () =>{
        navigation.navigate("EditPortfolio")
    }

    const experience = [
        {
          id: 0,
          title: "Java Developer",
          location: "Berlin",
          company: "Ubisoft",
          time: "07.12-04.13",
          url:
            "https://www.gry-online.pl/galeria/kontakty/344743037.png",
          description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this."
        },
        {
          id: 1,
          title: "Java Developer",
          location: "Berlin",
          company: "Ubisoft",
          time: "07.12-04.13",
          url:
            "https://www.gry-online.pl/galeria/kontakty/344743037.png",
          description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this."
        },
      ]

    return (
        <Container>
            <Header>
                <TopBar title="Experience" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <ExperienceList experience={experience}/>
                <View style={styles.btnView}>
                    <Btn icon="add" text="Add New" onPress={onClickAdd}/>
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