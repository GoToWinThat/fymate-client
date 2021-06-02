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
    Form,
  } from "native-base";
  import React, { useState } from "react";
  import TopBar from "../components/atoms/topbar";
  import { Dimensions, StyleSheet } from "react-native";
  import TagFilter from "../components/organisms/tagfilter";
  import BenefitsForm from "../components/organisms/benefitsForm";
  import Btn from "../components/atoms/btn";
  

export default EditOffert = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const [position, setPosition] = useState("");
    const [place, setPlace] = useState("");
    const [solary, setSolary] = useState("");
    const [time, setTime] = useState("");
    const [desc, setDesc] = useState("");
    const [howTo, setHowTo] = useState("");
    const [benefites, setBenefites] = useState([
      "No free days",
      "Challanges at work",
    ]);
  
    const addBenefit = (benefit) => {
      let arr = benefites;
      arr.push(benefit);
      setBenefites(arr);
    };

    return (
        <Container>
            <Header>
                <TopBar title="Edit Offert" onClickGoBack={onClickGoBack}/>
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
            placeholder={"Solary"}
            value={solary}
            onChangeText={setSolary}
          />
        </View>
        <View style={styles.input}>
          <Input placeholder={"Time"} value={time} onChangeText={setTime} />
        </View>
        <ListItem itemDivider>
          <Text>TAGS</Text>
        </ListItem>

        <TagFilter />
        <ListItem itemDivider>
          <Text>BENEFITS</Text>
        </ListItem>
        <BenefitsForm benefits={benefites} onClickAddBenefit={addBenefit} />

        <ListItem itemDivider>
          <Text>DESCRIPTION</Text>
        </ListItem>
        <View style={styles.input}>
          <Textarea
            style={styles.text}
            rowSpan={7}
            placeholder={"About You..."}
            value={desc}
            onChangeText={setDesc}
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
        <Btn text={"Apply"} />
            </Content>
        </Container>
    )
}
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
    marginHorizontal: 20,
    fontSize: 10,
  },
  textArea: {
    flexDirection: "row",
    borderWidth: 1.3,
    borderRadius: 40,
    padding: 20,
    borderColor: "gray",
    marginVertical: 10,
    marginHorizontal: 20,
    width: Dimensions.get("window").width - 40,
  },
});