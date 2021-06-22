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

  const [phone, setPhone] = useState(defaults?.phone !== undefined ? defaults.phone : "");
  const [location, setLocation] = useState(defaults?.location !== undefined ? defaults.location : "");
  const [site, setSite] = useState(defaults?.site !== undefined ? defaults.site : "");
  const [description, setDescription] = useState(defaults?.description !== undefined ? defaults.description : "");
  const [salary, setSalary] = useState(defaults?.salary !== undefined ? defaults.salary : "");
  const [position, setPosition] = useState(defaults?.position !== undefined ? defaults.position : "");
  const [company, setCompany] = useState(defaults?.company !== undefined ? defaults.company : "");

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
          value={location}
          onChangeText={setLocation}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Link to your page..."}
          value={site}
          onChangeText={setSite}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Your current company"}
          value={company}
          onChangeText={setCompany}
        />
      </View>
      <View style={formStyle.input}>
        <Input
          placeholder={"Your salary"}
          value={salary}
          onChangeText={setSalary}
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
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Btn text="Submit" onPress={() => submitCallback({
        phone: phone,
        location: location,
        site: site,
        description: description,
        salary: salary,
        position: position,
        company: company
      })} />
    </Form>
  );
};
