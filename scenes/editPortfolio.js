import { Button, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import TopBar from "../components/atoms/topbar";
import BaseForm from "../components/molecules/baseform";
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
      <BaseForm submitCallback={submitCallback} placeholders={["School/University", "Localization","Interesting facts..."]} />
    ) : (
      <BaseForm submitCallback={submitCallback} placeholders={["Position", "Company","Job description..."]} />
    );

  return (
    <Container>
      <Header>
        <TopBar onClickGoBack={onClickGoBack} title="Edit" />
      </Header>
      <Content>{form}</Content>
    </Container>
  );
};
