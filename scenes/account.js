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

export default Account = ({ route, navigation }) => {
  //Employee , Company 
  //TODO: fetch type from firebase
  const userOrCompany = "Employee";



  const uid = route.params.uid
  const [accountInfo, setAccountInfo] = useState({
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
      phone: "+48 517 952 221",
      mail: "michal.wieczorek@gmail.com",
      github: "michwiecz.github.com",
    }

  });

  const onClickGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    firebase.firestore().collection('users').doc(uid).get().then((data) => {
      console.log(data.data);
      setAccountInfo(data.data());
    }
    )
  }, []);



  const userContent =
    userOrCompany === "Employee" ? (
      <>
        <Header>
          <TopBar
            onClickGoBack={onClickGoBack}
            title="Account"
            rightIcon="heart"
            onClickRightIcon={() => console.log("Added to favorites !! TODO")}
          />
        </Header>
        <ImgInfo
          solary="8000 - 9000 PLN"
          location="Warsaw"
          url="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          title="Ragnar The Great"
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
          location="Warsaw, Kraków, Poznań"
          size="1500"
          url="https://www.gry-online.pl/galeria/kontakty/344743037.png"
          title="Ubisoft"
        />

        <About
          title="About"
          desciption={
            "Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi"
          }
        />
        <TagList
          tags={["C#", "JavaScript", "C++"]}
          title={"Tech Stack"}
          color={"blue"}
        />

        <About
          title="Our Company"
          desciption={
            "Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi"
          }
          img="https://i.insider.com/5faede1a402d49001924ee13?format=jpeg"
          desciption2={
            "Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi Lorem ipsum hi my friends elo elo hi hi hi ale śmieszny koperek hiishidshadi"
          }
        />

        <Contact contacts={contacts} color="black" />
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
