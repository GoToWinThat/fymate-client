import { Button, Container, Content, Header, Icon, Text, View } from 'native-base'
import {StyleSheet} from 'react-native'
import React, {useState} from 'react'
import TopBar from '../components/atoms/topbar'
import Avatar from '../components/atoms/avatar'
import Btn from '../components/atoms/btn'
import UsersList from '../components/organisms/usersList'
import CompanyList from '../components/organisms/companyList'

export default Favorite = ({ navigation }) => {
    
    const [activePage, setActivePage] = useState('User');

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
                {activePage === "Users" ? <UsersList/> : <CompanyList/> }
            </Content>
        </Container>
    )
}


