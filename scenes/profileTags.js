import { Header ,Container, Content } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import TagFilter from '../components/organisms/tagfilter'

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
                <TagFilter/>
            </Content>
        </Container>
    )
}

