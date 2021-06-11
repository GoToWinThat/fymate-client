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

export default ExperienceForm = ({ submitCallback, defaults }) => {

  const [position, setPosition] = useState(defaults?.position !== undefined ? defaults.first : "");
  const [date, setDate] = useState(defaults?.date !== undefined ? defaults.second : "");
  const [company, setCompany] = useState(defaults?.company !== undefined ? defaults.date : "");
  const [desc, setDesc] = useState(defaults?.desc !== undefined ? defaults.desc : "");

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Input
          placeholder={"Position..."}
          value={position}
          onChangeText={setPosition}
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
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback([phone, place, link, desc])} />
    </Form>
  );
};
