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
  const userOrCompany = route.params.type;
  const uid = route.params.uid;
  const onRightIconClick = route?.params?.rightIconCallback;
  const prevScreen = route.params.prev

  //TODO: get this from profile if this screen was accessed via "See your profile" (since we already fetch data in previous screen)
  const [accountInfo, setAccountInfo] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png");
  const [companyDescriptionImageUrl, setCompanyDescriptionImageUrl] = useState("https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png");

  console.log(`Account : account info ${JSON.stringify(accountInfo) }`)

  const onClickGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const storageRef = firebase.storage().ref();

    firebase.firestore().collection('users').doc(uid).get().then((data) => {
      const d = data.data()
      setAccountInfo(
        {
          uid: data.id,
          ...d
        }
      );
    });

    storageRef
      .child("avatars/" + uid)
      .getDownloadURL()
      .then(url => setAvatarUrl(url))
      .catch(e => console.log(e));


    storageRef
      .child("companyDescriptionImages/" + uid)
      .getDownloadURL()
      .then(url => setCompanyDescriptionImageUrl(url))
      .catch(e => console.log(e));
  }, []);

  const userContent =
    userOrCompany === "Employee" ? (
      <>
        <Header>
          {prevScreen === "profile" ?
            <TopBar
              onClickGoBack={onClickGoBack}
              title="Account"
            /> :
            <TopBar
              onClickGoBack={onClickGoBack}
              title="Account"
              rightIcon="heart"
              onClickRightIcon={() => onRightIconClick(accountInfo)}
            />}
        </Header>
        <ImgInfo
          salary={accountInfo?.details.salary}
          location={accountInfo?.location}
          url={avatarUrl}
          title={(accountInfo?.name || "") + " " + (accountInfo?.surname || "")}
          job={accountInfo?.details.position}
        />

        <About
          title="About"
          desciption={
            accountInfo?.about
          }
        />

        <TagList
          tags={accountInfo?.tags}
          title={"Tech Stack"}
          color={"blue"}
        />

        <DetailsList details={accountInfo?.details} type={accountInfo?.type} />
        <ExperienceList experience={accountInfo?.experience} />
        <ProjectList projects={accountInfo?.projects} />
        <EducationList education={accountInfo?.education} />
        <Contact contacts={accountInfo?.contacts} color="black" />
      </>
    ) : null;



  const companyContent =
    userOrCompany === "Company" ? (
      <>
        <Header>
          {prevScreen === "profile" ?
            <TopBar
              onClickGoBack={onClickGoBack}
              title="Company"
            /> :
            <TopBar
              onClickGoBack={onClickGoBack}
              title="Company"
              rightIcon="heart"
              onClickRightIcon={() => onRightIconClick(accountInfo)}
            />}
        </Header>
        <ImgInfo
          location={accountInfo?.location}
          size={accountInfo?.details?.companySize} //TODO: size info
          url={avatarUrl}
          title={(accountInfo?.name || "")}
        />

        <About
          title="About"
          desciption={accountInfo?.about}
        />
        <TagList
          tags={accountInfo?.tags}
          title={"Tech Stack"}
          color={"blue"}
        />

        <About //TODO: Add company description
          title="Our Company"
          desciption={accountInfo?.companyDescription?.description}
          img={companyDescriptionImageUrl}
          desciption2={accountInfo?.companyDescription?.unique}
        />

        <Contact contacts={accountInfo?.contacts} color="black" />
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
