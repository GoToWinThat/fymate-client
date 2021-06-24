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
import { formStyle } from '../../styles/style'

export default ExperienceForm = ({ submitCallback, defaults, idx }) => {

  const [title, setTitle] = useState(defaults?.title !== undefined ? defaults.title : "");
  const [date, setDate] = useState(defaults?.date !== undefined ? defaults.date : "");
  const [company, setCompany] = useState(defaults?.company !== undefined ? defaults.company : "");
  const [description, setDescription] = useState(defaults?.description !== undefined ? defaults.description : "");

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Input
          placeholder={"Position..."}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Date..."}
          value={date}
          onChangeText={setDate}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Company..."}
          value={company}
          onChangeText={setCompany}
        />
      </View>

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Textarea
          style={formStyle.text}
          rowSpan={7}
          placeholder={"About job..."}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback(
        {
          title: title,
          date: date,
          company: company,
          description: description
        }, idx
      )} />
    </Form>
  );
};
