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

export default ProjectForm = ({ submitCallback, defaults, idx }) => {

  const [title, setTitle] = useState(defaults?.title !== undefined ? defaults.title : "");
  const [description, setDescription] = useState(defaults?.description !== undefined ? defaults.description : "");
  const [tags, setTags] = useState(defaults?.tags !== undefined ? defaults.tags : []);


  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Input
          placeholder={"Project Name"}
          value={title}
          onChangeText={setTitle}
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
        initialTags={tags}
      />

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Textarea
          style={formStyle.text}
          rowSpan={7}
          placeholder={"Project Description..."}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback(
        {
          title: title,
          description: description,
          tags: tags
        }, idx)} />
    </Form>
  );
};
