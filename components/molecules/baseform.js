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
  Button,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import {SCREEN_PADDING} from '../../styles/spacing'

export default BaseForm = ({ placeholders, submit }) => {

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  return (
    <Form>
      <ListItem itemDivider>
        <Text>INFO</Text>
      </ListItem>
      <View style={styles.input}>
        <Input
          placeholder={placeholders[0]}
          value={first}
          onChangeText={setFirst}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder={placeholders[1]}
          value={second}
          onChangeText={setSecond}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder={placeholders[2]}
          value={date}
          onChangeText={setDate}
        />
      </View>

      
      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={[styles.input,{ paddingVertical: 20,}]}>
        <Textarea
          style={styles.text}
          rowSpan={7}
          placeholder={placeholders[3]}
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      <Btn text="Submit" onPress={() => submit([first, second, date, desc])} />
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
    width: "100%",
    fontSize: 17,
  },
  input: {
    flexDirection: "row",
    borderWidth: 1.3,
    borderRadius: 40,
    paddingHorizontal: 20,
    borderColor: "gray",
    marginVertical: 10,
    marginHorizontal: SCREEN_PADDING,
    fontSize: 5,
  },
  textArea: {
    flexDirection: "row",
    borderWidth: 1.3,
    borderRadius: 40,
    borderColor: "gray",
    marginHorizontal: SCREEN_PADDING,
    width: Dimensions.get("window").width - 40,
  },
});
