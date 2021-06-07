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
import { SCREEN_PADDING } from '../../styles/spacing'

export default BaseForm = ({ placeholders, submitCallback, defaults }) => {

  const [first, setFirst] = useState(defaults?.first !== undefined ? defaults.first : "");
  const [second, setSecond] = useState(defaults?.second !== undefined ? defaults.second : "");
  const [desc, setDesc] = useState(defaults?.desc !== undefined ? defaults.desc : "");
  const [date, setDate] = useState(defaults?.date !== undefined ? defaults.date : new Date(Date.now()));

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
    console.log(date);
  };


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

      <Btn text={date.toDateString()} onPress={showDatepicker} />

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={styles.input}>
        <Textarea
          style={styles.text}
          rowSpan={7}
          placeholder={placeholders[2]}
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Btn text="Submit" onPress={() => submitCallback([first, second, date, desc])} />
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
    paddingVertical: 20,
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
    padding: 20,
    borderColor: "gray",
    marginVertical: 20,
    marginHorizontal: SCREEN_PADDING,
    width: Dimensions.get("window").width - 40,
  },
});
