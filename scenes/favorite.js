import { Button, Container, Content, Header, Icon, Text, View } from 'native-base'
import {StyleSheet} from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Avatar from '../components/atoms/avatar'

export default Favorite = ({ navigation }) => {
    
    const onClickNavigateFilters = () => {
        navigation.navigate('Filters', {
            screen: 'Filters'
        })
    }

    return (
        <Container>
            <Header>
                <TopBar title="Fymate" onClickRightIcon={onClickNavigateFilters} rightIcon="filter"/>
            </Header>
            <Content>
                <Text>There is content of Favorite There is a list</Text>
                <Avatar onClickHandle={() => console.log("elo")} 
                    url="https://cont4.naekranie.pl/media%2Fcache%2Farticle-cover%2F2016%2F07%2Fneytiri-avatar-5824.jpg"
                    />
            </Content>
        </Container>
    )
}


