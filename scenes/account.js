import { Container, Content } from "native-base";
import  React, {useEffect, useState } from "react";
import { View, Text } from "react-native";
import Accountheader from "../components/atoms/accountheader";
import ImgProfile from "../components/atoms/imgprofile";
import * as firebase from 'firebase'

export default Account = ({ route, navigation }) => {
  const uid = route.params.uid
  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: ""
  })

  useEffect(() => {
    firebase.firestore().collection('users').doc(uid).get().then((data) => {
      console.log(data.data);
      setAccountInfo(data.data());
    }
    )
  }, []);


  const onClickGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Accountheader onClickGoBack={onClickGoBack} />
      <Content>
        <ImgProfile
          title={accountInfo.firstName + " " + accountInfo.lastName}
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
