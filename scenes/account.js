import { Container, Content, Header } from "native-base";
import React, { useState, useEffect } from "react";
import About from "../components/atoms/about";
import ExperienceList from "../components/organisms/experienceList";
import ProjectList from "../components/organisms/projectList";
import EducationList from "../components/organisms/educationList";
import Contact from "../components/molecules/contact";
import TagList from "../components/molecules/tagList";
import DetailsList from "../components/molecules/detailList";
import TopBar from "../components/atoms/topbar";
import ImgInfo from "../components/atoms/imginfo";
import * as firebase from "firebase";
import { acc } from "react-native-reanimated";

export default Account = ({ route, navigation }) => {
  //Employee , Company 
  //TODO: fetch type from firebase
  const userOrCompany = route.params.type;
  const uid = route.params.uid;
  const onRightIconClick = route?.params?.rightIconCallback;

  //TODO: get this from profile if this screen was accessed via "See your profile" (since we already fetch data in previous screen)
  const [accountInfo, setAccountInfo] = useState({
    uid: "",
    about: "",
    company: "",
    email: "",
    location: "",
    name: "",
    surname: "",
    phone: "",
    details: {
      contract: "",
      jobtime: "",
      position: "",
      starttime: "",
      worktype: "",
    },
    education: [],
    experience: [],
    projects: [],
    tags: [],
    contacts: {
      phone: "",
      mail: "",
      github: "",
    }
  });

  
  const [avatarUrl, setAvatarUrl] = useState("https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png");

  const onClickGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    firebase.firestore().collection('users').doc(uid).get().then((data) => {
      const d = data.data()
      setAccountInfo(
        {
          uid: data.id,
          ...d
        }
      );
    });

    firebase.storage().ref()
      .child("avatars/" + uid)
      .getDownloadURL()
      .then(url => setAvatarUrl(url))
      .catch(e => console.log(e));
  }, []);




  //TODO: move this to render
  const userContent =
    userOrCompany === "Employee" ? (
      <>
        <Header>
          <TopBar
            onClickGoBack={onClickGoBack}
            title="Account"
            rightIcon="heart"
            onClickRightIcon={() => onRightIconClick(accountInfo)}
          />
        </Header>
        <ImgInfo
          solary="TODO"
          location={accountInfo.location}
          url={avatarUrl}
          title={accountInfo.name + " " + accountInfo.surname}
          job="UX/UI Designer"
        />

        <About
          title="About"
          desciption={
            accountInfo.about
          }
        />

        <TagList
          tags={accountInfo.tags}
          title={"Tech Stack"}
          color={"blue"}
        />

        <DetailsList details={accountInfo.details} />
        <ExperienceList experience={accountInfo.experience} />
        <ProjectList projects={accountInfo.projects} />
        <EducationList education={accountInfo.education} />
        <Contact contacts={accountInfo.contacts} color="black" />
      </>
    ) : null;


  //TODO: move this to render
  const companyContent =
    userOrCompany === "Company" ? (
      <>
        <Header>
          <TopBar
            onClickGoBack={onClickGoBack}
            title="Company"
            rightIcon="heart"
            onClickRightIcon={() => console.log("Added to favorites !! TODO")}
          />
        </Header>
        <ImgInfo
          location={accountInfo.location}
          size="1500" //TODO: size info
          url={avatarUrl}
          title={accountInfo.name}
        />

        <About
          title="About"
          desciption={accountInfo.about}
        />
        <TagList
          tags={accountInfo.tags}
          title={"Tech Stack"}
          color={"blue"}
        />

        <About //TODO: Add company description
          title="Our Company"
          desciption={
            "Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi"
          }
          img="https://i.insider.com/5faede1a402d49001924ee13?format=jpeg"
          desciption2={
            "Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi"
          }
        />

        <Contact contacts={accountInfo.contacts} color="black" />
      </>
    ) : null;
  //Tag list or  tech stack ? ?  tag list is clickable
  return (
    <Container>
      <Content>
        {userContent}
        {companyContent}
      </Content>
    </Container>
  );
};
