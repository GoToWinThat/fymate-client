import {
  Button,
  Container,
  Content,
  Header,
  Icon,
  Text,
  View,
  ListItem,
  Textarea,
  Input,
  Form, o
} from "native-base";
import React, { useState } from "react";
import TopBar from "../components/atoms/topbar";
import TagFilter from "../components/organisms/tagfilter";
import BenefitsForm from "../components/organisms/benefitsForm";
import Btn from "../components/atoms/btn";
import * as firebase from 'firebase'
import { formStyle } from '../styles/style'

export default AddOffer = ({ navigation }) => {
  const firestore = firebase.firestore();
  const onClickGoBack = () => {
    navigation.goBack();
  };

  const [position, setPosition] = useState("");
  const [place, setPlace] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [howTo, setHowTo] = useState("");
  const [benefits, setBenefits] = useState([
    "No free days",
    "Challanges at work",
  ]);
  const [tags, setTags] = useState([])


  const addBenefit = (benefit) => {
    let arr = benefits;
    arr.push(benefit);
    setBenefits(arr);
  };



  const onSubmit = () => {


    const offer = {
      ownerUid: firebase.auth().currentUser.uid,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      position: position,
      salary: salary,
      description: description,
      benefits: benefits,
      howTo: howTo,
      place: place,
      tags: tags
    }
    firestore.collection('offers').add(offer);
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <TopBar title="Edit Offert" onClickGoBack={onClickGoBack} onClickRightIcon={onClickGoBack} rightIcon="trash-outline"/>
      </Header>
      <Content>
        <ListItem itemDivider>
          <Text>GENERAL</Text>
        </ListItem>

        <View style={formStyle.input}>
          <Input
            placeholder={"Position"}
            value={position}
            onChangeText={setPosition}
          />
        </View>
        <View style={formStyle.input}>
          <Input
            placeholder={"Localization"}
            value={place}
            onChangeText={setPlace}
          />
        </View>
        <View style={formStyle.input}>
          <Input
            placeholder={"Salary"}
            value={salary}
            onChangeText={setSalary}
          />
        </View>
        <ListItem itemDivider>
          <Text>TAGS</Text>
        </ListItem>

        <TagFilter activeTagsChangedCallback={setTags} />
        <ListItem itemDivider>
          <Text>BENEFITS</Text>
        </ListItem>
        <BenefitsForm benefits={benefits} onClickAddBenefit={addBenefit} />

        <ListItem itemDivider>
          <Text>DESCRIPTION</Text>
        </ListItem>
        <View style={formStyle.input}>
          <Textarea
            style={formStyle.text}
            rowSpan={7}
            placeholder={"About You..."}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <ListItem itemDivider>
          <Text>HOW TO APPLY</Text>
        </ListItem>
        <View style={formStyle.input}>
          <Textarea
            style={formStyle.text}
            rowSpan={7}
            placeholder={"Instruction..."}
            value={howTo}
            onChangeText={setHowTo}
          />
        </View>
        <Btn text={"Submit"} onPress={onSubmit} />

      </Content>
    </Container>
  );
};

