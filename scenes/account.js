import { Container, Content, Header } from "native-base";
import  React, {useEffect, useState } from "react";
import { View, Text } from "react-native";
import ImgProfile from "../components/atoms/imgprofile";
import About from '../components/molecules/about';
import Experience from '../components/atoms/experience';
import Projects from '../components/atoms/projects';
import Educations from '../components/atoms/educations';
import Contact from '../components/atoms/contact';
import TagList from '../components/molecules/tagList';
import DetailsList from '../components/molecules/detailList';
import TopBar from '../components/atoms/topbar';
import ImgInfo from '../components/atoms/imginfo';
import * as firebase from 'firebase'

export default Account = ({ route, navigation }) => {
  // const uid = route.params.uid
  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: ""
  })

  const onClickGoBack = () => {
    navigation.goBack();
  }

  // useEffect(() => {
  //   firebase.firestore().collection('users').doc(uid).get().then((data) => {
  //     console.log(data.data);
  //     setAccountInfo(data.data());
  //   }
  //   )
  // }, []);

const contacts = [
  {
    icon: 'call',
    description: '213 533 213',
  },
  {
    icon: 'mail-sharp',
    description: 'wieczorek@gmail.com',
  },
  {
    icon: 'logo-facebook',
    description: 'wieczorek Wieczorem',
  },
  {
    icon: 'logo-linkedin',
    description: 'Tomek Wieczorek',
  }
]

const experience = [
  {
    id: 0,
    title: "Java Developer",
    location: "Berlin",
    company: "Ubisoft",
    time: "07.12-04.13",
    url:
      "https://www.gry-online.pl/galeria/kontakty/344743037.png",
    description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this."
  },
  {
    id: 1,
    title: "Java Developer",
    location: "Berlin",
    company: "Ubisoft",
    time: "07.12-04.13",
    url:
      "https://www.gry-online.pl/galeria/kontakty/344743037.png",
    description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this."
  },
]

const projects = [
  {
    id: 0,
    taglist: ["C#", "C++", "Swift"],
    title: "WeatherApp",
    description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this.",
  },
  {
    id: 1,
    taglist: ["JavaScript", "C#"],
    title: "WeatherApp",
    description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this.",
  },
  {
    id: 2,
    taglist: ["C#", "C++", "Swift"],
    title: "WeatherApp",
    description:"Lorem Ipsum some description and some random words. So don't blame me if someone forget to remove this.",
  },
]

const education = [
  {
    id: 0,
    education: "University of Noise",
    time: "07.12-04.13",
    location: "Warszawa"
  },
  {
    id: 1,
    education: "University of Colorado",
    time: "07.12-04.13",
    location: "Warszawa"
  },
]

const details = {
    contract: "Umowa - B2B",
    position: "Junior",
    worktype: "Remote",
    starttime: "06.07.2021.r",
    jobtime: "1/4 etatu"
}



  //Tag list or  tech stack ? ?  tag list is clickable
  return (
    <Container>
      <Content>
        <Header>
          <TopBar onClickGoBack={onClickGoBack} title="Account" rightIcon="heart" onClickRightIcon={() => console.log("Added to favorites !! TODO")}/>
        </Header>
        <ImgInfo
            solary='8000 - 9000 PLN'
            location="Warsaw"
            url="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
            title={accountInfo.firstName + " " + accountInfo.lastName}
            job="UX/UI Designer"
        />

        <About desciption={"Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi"}/>
        <View style={{padding: 20}}>
          <TagList tags={['C#', "JavaScript", "C++"]} title={"Tech Stack"} color={'blue'}/>
        </View>
        <DetailsList details={details}/>
        <Experience experience={experience}/>
        <Projects projects={projects}/>
        <Educations education={education}/>
        <Contact contacts={contacts} color="black"/>
      </Content>
    </Container>
  );
};
