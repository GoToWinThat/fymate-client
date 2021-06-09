import { Header, Container, Content } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import TagFilter from '../components/organisms/tagfilter'

export default ProfileTags = ({ route, navigation }) => {
    const doc = route.params.doc;
    const tags = route.params.info;

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onTagsChanged = (newTags) => {
        doc.update({tags: newTags})
    }

    return (
        <Container>
            <Header>
                <TopBar title="Tags" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <TagFilter initialTags={tags} activeTagsChangedCallback={onTagsChanged} />
            </Content>
        </Container>
    )
}

