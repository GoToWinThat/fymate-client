import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import Btn from "../atoms/btn";
import {
  View,
  ListItem,
  Text,
  Textarea,
  Input,
  Form,
} from "native-base";
import TagList from "./tagList";
import {SCREEN_PADDING} from '../../styles/spacing'

export default ProjectForm = ({ submit }) => {

  const [first, setFirst] = useState("");
  const [desc, setDesc] = useState("");
  

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={styles.input}>
        <Input
          placeholder={"Project Name"}
          value={first}
          onChangeText={setFirst}
        />
      </View>
      <ListItem itemDivider>
        <Text>TAGS</Text>
      </ListItem>
      <TagList
        tags={["SQL", "Oracle", "C#", "Python", "Javascript", "Ruby", "Linux"]}
        color='blue'
        clickable={true}
        title={'Tech Stack'}
      />

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={styles.input}>
        <Textarea
          style={styles.text}
          rowSpan={7}
          placeholder={"Project Description..."}
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      <Btn text="Submit" onPress={() => submit([first, desc])} />
    </Form>
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
