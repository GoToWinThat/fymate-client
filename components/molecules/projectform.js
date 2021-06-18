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
import { formStyle } from '../../styles/style'

export default ProjectForm = ({ submitCallback }) => {

  const [first, setFirst] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={formStyle.input}>
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
        activeTagsChangedCallback={setTags}
      />

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Textarea
          style={formStyle.text}
          rowSpan={7}
          placeholder={"Project Description..."}
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback([first, desc, tags])} />
    </Form>
  );
};
