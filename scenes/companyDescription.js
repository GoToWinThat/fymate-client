import {
  Header,
  Container,
  Content,
  ListItem,
  Form,
  View,
  Text,
  Textarea,
} from "native-base";
import React, { useState, useEffect } from "react";
import TopBar from "../components/atoms/topbar";
import avatar from "../components/atoms/avatar";
import { formStyle } from '../styles/style'
import Btn from '../components/atoms/btn'
import * as firebase from "firebase";
import { notFoundImageUrl } from "../globals";

export default CompanyDescription = ({ route, navigation }) => {

  const initialState = route.params.info;
  const doc = route.params.doc;


  const onClickGoBack = () => {
    navigation.goBack();
  };

  const onImageChosen = async (uri) => {
    const uid = firebase.auth().currentUser.uid;
    const response = await fetch(uri)
    const data = await response.blob();
    const ref = firebase.storage().ref().child("companyDescriptionImages/" + uid);
    ref.put(data);
  }

  const [description, setDescription] = useState(initialState?.description || "");
  const [unique, setUnique] = useState(initialState?.unique || "");
  const [imageUrl, setImageUrl] = useState(initialState?.imageUrl || notFoundImageUrl);

  //Fetches image url from firebase
  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    const ref = firebase.storage().ref().child("companyDescriptionImages" + uid);
    ref.getDownloadURL().then(url => setImageUrl(url));
  }, []);

  const onClickOnSubmit = () => {
    doc.update({ companyDescription: { description: description, unique: unique } })
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <TopBar title="Description" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <Form>
          <ListItem itemDivider>
            <Text>YOUR COMPANY</Text>
          </ListItem>
          <View style={formStyle.input}>
            <Textarea
              style={formStyle.text}
              rowSpan={7}
              placeholder={"Describe your company..."}
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <View style={formStyle.input}>
            <Textarea
              style={formStyle.text}
              rowSpan={7}
              placeholder={"Why it is so unique..."}
              value={unique}
              onChangeText={setUnique}
            />
          </View>

          <ListItem itemDivider>
            <Text>IMAGE</Text>
          </ListItem>
          <Avatar url={imageUrl} onImageChosen={onImageChosen} />

          <Btn text="Submit" onPress={() => onClickOnSubmit()}/>
        </Form>
      </Content>
    </Container>
  );
};
