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
import { Dimensions, StyleSheet } from "react-native";
import TagFilter from "../components/organisms/tagfilter";
import BenefitsForm from "../components/organisms/benefitsForm";
import Btn from "../components/atoms/btn";
import { SCREEN_PADDING } from '../styles/spacing'
import * as firebase from 'firebase'


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
        <TopBar title="Edit Offert" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <ListItem itemDivider>
          <Text>GENERAL</Text>
        </ListItem>

        <View style={styles.input}>
          <Input
            placeholder={"Position"}
            value={position}
            onChangeText={setPosition}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder={"Localization"}
            value={place}
            onChangeText={setPlace}
          />
        </View>
        <View style={styles.input}>
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
        <View style={styles.input}>
          <Textarea
            style={styles.text}
            rowSpan={7}
            placeholder={"About You..."}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <ListItem itemDivider>
          <Text>HOW TO APPLY</Text>
        </ListItem>
        <View style={styles.input}>
          <Textarea
            style={styles.text}
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
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 17,
    paddingVertical: 20,
    width: "100%",
  },
  input: {
    flexDirection: "row",
    borderWidth: 1.3,
    borderRadius: 40,
    paddingHorizontal: 20,
    borderColor: "gray",
    marginVertical: 10,
    marginHorizontal: SCREEN_PADDING,
    fontSize: 5,
  },
  textArea: {
    flexDirection: "row",
    borderWidth: 1.3,
    borderRadius: 40,
    padding: 20,
    borderColor: "gray",
    marginVertical: 10,
    marginHorizontal: SCREEN_PADDING,
    width: Dimensions.get("window").width - 40,
  },
});
