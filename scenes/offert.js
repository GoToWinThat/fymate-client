import { Button, Container, Content, Header, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import About from '../components/atoms/about'
import TagList from '../components/molecules/tagList'
import DetailsList from '../components/molecules/detailList'
import BenefitsDoubleList from '../components/organisms/benefitsDoubleList'
import ImgInfo from '../components/atoms/imginfo'

export default Offert = ({ route, navigation }) => {
    const offer = route?.params?.offer
    console.log(offer)


    const onClickGoBack = () => {
        navigation.goBack();
    }
    //TODO: company fetch
    //TODO: Image url
    return (
        <Container>
            <Header>
                <TopBar onClickGoBack={onClickGoBack} title={"Offert"}
                    rightIcon='heart' onClickRightIcon={() => console.log("TODO; ADD to favorite")} />
            </Header>
            <Content >
                <ImgInfo
                    solary={offer.salary}
                    location={offer.place}
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtJrLLTxjKNbvNxJGA3Id6_at43-0cWYglUKoAukqoyqTnv_KwnX34tDM2rISSZchc70&usqp=CAU"
                    title={offer.position}
                    company="IBM corp."
                    size={30000}
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
