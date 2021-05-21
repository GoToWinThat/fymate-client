import { Button, Container, Content, Header, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

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
