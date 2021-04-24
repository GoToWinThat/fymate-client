import { Container, Content } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Accountheader from "../components/atoms/accountheader";
import ImgProfile from "../components/atoms/imgprofile";

export default Account = ({ navigation }) => {
  const onClickGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Accountheader onClickGoBack={onClickGoBack} />
      <Content>
        <ImgProfile
          title="Wojtek Kuśnik"
          url="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          solary='8000 - 9000 PLN'
          location='Warsaw'
          size='2444'
          company='Ubisoft'
        />
      </Content>
    </Container>
  );
};
