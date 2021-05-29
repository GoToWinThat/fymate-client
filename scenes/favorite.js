import { Button, Container, Content, Header, Icon, Text, View } from 'native-base'
import {StyleSheet} from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Avatar from '../components/atoms/avatar'
import Btn from '../components/atoms/btn'

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
            </Content>
        </Container>
    )
}


