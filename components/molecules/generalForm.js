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

export default GeneralForm = ({ submitCallback, defaults }) => {

  const [phone, setPhone] = useState(defaults?.phone !== undefined ? defaults.first : "");
  const [place, setPlace] = useState(defaults?.place !== undefined ? defaults.second : "");
  const [link, setLink] = useState(defaults?.link !== undefined ? defaults.date : "");
  const [desc, setDesc] = useState(defaults?.desc !== undefined ? defaults.desc : "");
  const [solary, setSolary] = useState(defaults?.solary !== undefined ? defaults.desc : "");
  const [position, setPosition] = useState(defaults?.position !== undefined ? defaults.desc : "");

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Input
          placeholder={"Phone number..."}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Localization..."}
          value={place}
          onChangeText={setPlace}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Link to your page..."}
          value={link}
          onChangeText={setLink}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Your solary"}
          value={solary}
          onChangeText={setSolary}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Your current position"}
          value={position}
          onChangeText={setPosition}
        />
      </View>

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={formStyle.input}>
        <Textarea
          style={formStyle.text}
          rowSpan={7}
          placeholder={"About you..."}
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback({
        phone: phone,
        place: place,
        link: link,
        description: desc,
        solary: solary,
        position: position
      }, idx)} />
    </Form>
  );
};
