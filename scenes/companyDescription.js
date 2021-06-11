import {
  Header,
  Container,
  Content,
  ListItem,
  Form,
  View,
  Text,
  Textarea,
} from "native-base";
import React, { useState } from "react";
import TopBar from "../components/atoms/topbar";
import { SCREEN_PADDING } from "../styles/spacing";
import { Dimensions, StyleSheet } from "react-native";
import avatar from "../components/atoms/avatar";

export default CompanyDescription = ({ navigation }) => {
  const onClickGoBack = () => {
    navigation.goBack();
  };
  const [desc, setDesc] = useState("");
  const [unique, setUnique] = useState("");

  return (
    <Container>
      <Header>
        <TopBar title="Company Description" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <Form>
          <ListItem itemDivider>
            <Text>YOUR COMPANY</Text>
          </ListItem>
          <View style={[styles.input,{ paddingVertical: 20,}]}>
            <Textarea
              style={styles.text}
              rowSpan={7}
              placeholder={"Describe your company..."}
              value={desc}
              onChangeText={setDesc}
            />
          </View>
          <View style={[styles.input,{ paddingVertical: 20,}]}>
            <Textarea
              style={styles.text}
              rowSpan={7}
              placeholder={"Why it is so unique..."}
              value={unique}
              onChangeText={setUnique}
            />
          </View>

          <ListItem itemDivider>
            <Text>IMAGE</Text>
          </ListItem>
          <Avatar url={"https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/13/72100.jpg"}/>
        </Form>
      </Content>
    </Container>
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
