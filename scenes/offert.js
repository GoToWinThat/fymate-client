import { Button, Container, Content, Header, Icon, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import TopBar from '../components/atoms/topbar'
import About from '../components/atoms/about'
import TagList from '../components/molecules/tagList'
import DetailsList from '../components/molecules/detailList'
import BenefitsDoubleList from '../components/organisms/benefitsDoubleList'
import ImgInfo from '../components/atoms/imginfo'
import * as firebase from 'firebase'

///Read only offer 
export default Offert = ({ route, navigation }) => {
    const offer = route?.params?.offer
    const onRightIconClick = route?.params?.rightIconCallback;
    const [company, setCompany] = useState(null)

    console.log(offer)
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onRightIconClickAndGoBack = () => {
        onRightIconClick(offer)
        navigation.goBack();
    }

    //fetch company data
    useEffect(() => {
        firebase.firestore().collection("users").doc(offer.ownerUid).get().then(x => setCompany(x.data()))
    }, [])


    return (
        <Container>
            <Header>
                <TopBar onClickGoBack={onClickGoBack} title={"Offert"}
                    rightIcon='heart' onClickRightIcon={onRightIconClickAndGoBack} />
            </Header>
            <Content >
                <ImgInfo
                    salary={offer.salary}
                    location={offer.place}
                    url={offer.url}
                    title={offer.position}
                    company={company?.name}
                    size={company?.details?.companySize}
                />
                <About title="About" desciption={offer.description} />
                <TagList tags={offer.tags} title={"Tech Stack"} color={'blue'} />
                <DetailsList details={[]} />
                <BenefitsDoubleList benefits={offer.benefits} />
                <About title="How To Apply" desciption={offer.howtoapply} />

            </Content>
        </Container>
    )
}
