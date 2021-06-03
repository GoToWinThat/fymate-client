import { Header ,Container, Content, Icon, Text, View } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default ProfileTags = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <TopBar title="Tags" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <Text>There is content of Profile Tags</Text>
            </Content>
        </Container>
    )
}

