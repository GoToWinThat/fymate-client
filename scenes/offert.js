import { Button, Container, Content, Header, Icon, Text } from 'native-base'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import About from '../components/molecules/about'
import TagList from '../components/molecules/tagList'
import DetailsList from '../components/molecules/detailList'
import BenefitsDoubleList from '../components/organisms/benefitsDoubleList'
import HowToApply from '../components/atoms/howtoapply'
import ImgInfo from '../components/atoms/imginfo'

export default Offert = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const details = {
        contract: "Umowa - B2B",
        position: "Junior",
        worktype: "Remote",
        starttime: "06.07.2021.r",
        jobtime: "1/4 etatu"
    }

    const benefits = ["Free Food", "Unlimited Netflix", "Daily Coffe", "1h PS5", "Unlimited Spotify", "Daily Apple", "2h Xbox"]

    const howtoapply = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper bibendum tortor, non viverra velit gravida at. Vestibulum eros lorem, iaculis sit amet sapien non, euismod imperdiet enim. Nam aliquam augue et vestibulum malesuada. Donec tristique pulvinar metus eget dignissim. Cras ante lacus, blandit non congue id, malesuada a velit. Vivamus porttitor ac lacus elementum ultricies. Vivamus sit amet pellentesque augue, vitae pharetra dolor. Donec posuere elit quis orci tincidunt aliquet. Duis pellentesque pretium urna, in finibus dui rhoncus ac."

    return (
        <Container>
            <Header>
                <TopBar onClickGoBack={onClickGoBack} title={"Offert"}
                     rightIcon='heart' onClickRightIcon={() => console.log("TODO; ADD to favorite")}/>
            </Header>
            <Content >
                <ImgInfo 
                    solary='8000 - 9000 PLN'
                    location="Warsaw"
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtJrLLTxjKNbvNxJGA3Id6_at43-0cWYglUKoAukqoyqTnv_KwnX34tDM2rISSZchc70&usqp=CAU"
                    title="Front-end Developer"
                    company="IBM corp."
                    size={30000}
                />
                <About desciption={howtoapply}/>
                <TagList tags={['C#', "JavaScript", "C++", "React"]} title={"Tech Stack"} color={'blue'}/>
                <DetailsList details={details}/>
                <BenefitsDoubleList benefits={benefits}/>
                <HowToApply desciption={howtoapply}/>

            </Content>
        </Container>
    )
}
