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

export default EducationForm = ({ submitCallback, defaults, idx }) => {

  const [university, setUniversity] = useState(defaults?.university !== undefined ? defaults.university : "");
  const [date, setDate] = useState(defaults?.date !== undefined ? defaults.date : "");
  const [place, setPlace] = useState(defaults?.place !== undefined ? defaults.place : "");
  const [description, setDescription] = useState(defaults?.description !== undefined ? defaults.description : "");

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Input
          placeholder={"University/School..."}
          value={university}
          onChangeText={setUniversity}
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
          placeholder={"Localization..."}
          value={place}
          onChangeText={setPlace}
        />
      </View>

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Textarea
          style={formStyle.text}
          rowSpan={7}
          placeholder={"What have you learnt..."}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback({
        university: university,
        date: date,
        place: place,
        description: description
      }, idx)} />
    </Form>
  );
};
