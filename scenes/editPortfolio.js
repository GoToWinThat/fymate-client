import { Button, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import TopBar from "../components/atoms/topbar";
import BaseForm from "../components/molecules/baseform";

export default EditPortfolio = ({ navigation, route }) => {
  const { type } = route.params;

  const onClickGoBack = () => {
    navigation.goBack();
  };

  const form =
    type === "project" ? (
      <BaseForm placeholders={["Name", "Tags", "Tags"]} />
    ) : type === "education" ? (
      <BaseForm placeholders={["School/University", "Localization", "Date","Interesting facts..."]} />
    ) : (
      <BaseForm placeholders={["Position", "Company", "Date","Job description..."]} />
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
