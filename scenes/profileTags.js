import { Header, Container, Content } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import TagFilter from '../components/organisms/tagfilter'
import { allContractTags, allJobtimeTags, allLevelTags, allTechstackTags, allWorktypeTags } from '../globals'

export default ProfileTags = ({ route, navigation }) => {
    const doc = route.params.doc;
    const tags = route.params.info;

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onTagsChanged = (newTags) => {

        let contract = undefined;
        let jobtime = undefined;
        let worktype = undefined;
        let level = undefined;

        if (newTags?.contract !== undefined)
            contract = newTags.contract[0]
        if (newTags?.jobtime !== undefined)
            jobtime = newTags.jobtime[0]
        if (newTags?.worktype !== undefined)
            worktype = newTags.worktype[0]
        if (newTags?.level !== undefined)
            level = newTags.level[0]

        doc.update({
            tags: newTags?.techstack || [],
            "details.contract": contract || "",
            "details.jobtime": jobtime || "",
            "details.worktype": worktype || "",
            "details.level": level || ""
        })
    }

    return (
        <Container>
            <Header>
                <TopBar title="Tags" onClickGoBack={onClickGoBack} />
            </Header>
            <Content>
                <TagFilter initialTags={tags} activeTagsChangedCallback={onTagsChanged}
                    tags={{
                        techstack: allTechstackTags,
                        contract: allContractTags,
                        jobtime: allJobtimeTags,
                        worktype: allWorktypeTags,
                        level: allLevelTags
                    }}
                    colors={{
                        techstack: "blue",
                        contract: "purple",
                        jobtime: "green",
                        worktype: "orange",
                        level: "red"
                    }}
                    labels={{
                        techstack: "Techstack",
                        contract: "Contract",
                        jobtime: "Jobtime",
                        worktype: "Agreement",
                        level: "Level"
                    }}
                />
            </Content>
        </Container>
    )
}

