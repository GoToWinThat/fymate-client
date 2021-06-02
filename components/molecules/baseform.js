import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import Btn from '../atoms/btn'
import {
  View,
  ListItem,
  Text,
  Textarea,
  Input,
  Form,
  Button
} from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';

export default BaseForm = ({ placeholders, submit }) => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [desc, setDesc] = useState("");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
    console.log(date)
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

      <Btn text={date.toDateString()} onPress={showDatepicker}/>

      <ListItem itemDivider>
        <Text>DESCRIPTION</Text>
      </ListItem>
      <View style={styles.input}>
        <Textarea
          style={styles.text}
          rowSpan={7}
          placeholder={placeholders[3]}
          value={desc}
          onChangeText={setDesc}
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}





      <Btn text="Submit" onPress={() => submit([first,second,third,desc])}/>
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
    marginHorizontal: 20,
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
