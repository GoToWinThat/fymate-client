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
import { allContractTags, allJobtimeTags, allLevelTags, allTechstackTags, allWorktypeTags } from '../globals'

export default AddOffer = ({ route, navigation }) => {
  const defaults = route?.params?.defaults;

  const firestore = firebase.firestore();
  const onClickGoBack = () => {
    navigation.goBack();
  };

  const [position, setPosition] = useState(defaults?.position !== undefined ? defaults.position : "");
  const [place, setPlace] = useState(defaults?.place !== undefined ? defaults.place : "");
  const [salary, setSalary] = useState(defaults?.salary !== undefined ? defaults.salary : "");
  const [description, setDescription] = useState(defaults?.description !== undefined ? defaults.description : "");
  const [howTo, setHowTo] = useState(defaults?.howTo !== undefined ? defaults.howTo : "");
  const [benefits, setBenefits] = useState(defaults?.benefits !== undefined ? defaults.benefits : []);
  const [tags, setTags] = useState(defaults?.tags !== undefined ? {
    techstack: defaults.tags,
    worktype: [defaults.details.worktype],
    jobtime: [defaults.details.jobtime],
    contract: [defaults.details.contract],
    level: [defaults.details.level],
  } : {})


  const addBenefit = (benefit) => {
    let arr = benefits;
    arr.push(benefit);
    setBenefits(arr);
  };

  const onSubmit = (offer) => {
    delete offer.docId
    firestore.collection('offers').add(offer);
    navigation.goBack();
  }

  const deleteBenefit = (benefit) => {
    let arr = benefits
    arr = arr.filter(e => e !== benefit)
    setBenefits(arr)
  }

  const submitCallback = route?.params?.submitCallback !== undefined ? route.params.submitCallback : onSubmit;
  const deleteCallback = route?.params?.deleteCallback;

  return (
    <Container>
      <Header>
        <TopBar title="Edit Offert" onClickGoBack={onClickGoBack} onClickRightIcon={() => {
          if (deleteCallback !== undefined)
            deleteCallback(defaults?.docId);
          onClickGoBack();
        }} rightIcon="trash-outline" />
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

        <TagFilter initialTags={tags} activeTagsChangedCallback={setTags}
          tags={{
            techstack: allTechstackTags,
            contract: allContractTags,
            jobtime: allJobtimeTags,
            worktype: allWorktypeTags,
            level: allLevelTags
          }}
          colors={{
            techstack: "blue",
            contract: "purple",
            jobtime: "green",
            worktype: "orange",
            level: "red"
          }}
          labels={{
            techstack: "Techstack",
            contract: "Contract",
            jobtime: "Jobtime",
            worktype: "Agreement",
            level: "Level"
          }}
          singleChoices={{
            contract: true,
            jobtime: true,
            worktype: true,
            level: true,
          }}
        />
        <ListItem itemDivider>
          <Text>BENEFITS</Text>
        </ListItem>
        <BenefitsForm benefits={benefits} onClickAddBenefit={addBenefit} onClickDeleteBenefit={deleteBenefit} />

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
        <Btn text={"Submit"} onPress={() => submitCallback({
          docId: defaults?.docId,
          ownerUid: firebase.auth().currentUser.uid,
          date: firebase.firestore.FieldValue.serverTimestamp(),
          position: position,
          salary: salary,
          description: description,
          benefits: benefits,
          howTo: howTo,
          place: place,
          details: {
            contract: tags.contract[0] || "",
            worktype: tags.worktype[0] || "",
            level: tags.level[0] || "",
            jobtime: tags.jobtime[0] || ""
          },
          tags: tags.techstack
        })} />

      </Content>
    </Container>
  );
};

