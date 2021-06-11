import { Button, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import TopBar from "../components/atoms/topbar";
import EducationForm from "../components/molecules/educationForm";
import ExperienceForm from "../components/molecules/experienceForm";
import ProjectForm from "../components/molecules/projectform";

export default EditPortfolio = ({ navigation, route }) => {
  const { type, submitCallback } = route.params;

  const onClickGoBack = () => {
    navigation.goBack();
  };

  const form =
    type === "project" ? (
      <ProjectForm submitCallback={submitCallback}/>
    ) : type === "education" ? (
      <EducationForm submitCallback={submitCallback} />
    ) : (
      <ExperienceForm submitCallback={submitCallback} />
    );

  return (
    <Container>
      <Header>
        <TopBar onClickGoBack={onClickGoBack} title="Edit" onClickRightIcon={onClickGoBack} rightIcon="trash-outline" />
      </Header>
      <Content>{form}</Content>
    </Container>
  );
};
