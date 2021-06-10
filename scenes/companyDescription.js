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

export default CompanyDescription = ({ route, navigation }) => {

  const initialState = route.params.info;
  const doc = route.params.doc;


  const onClickGoBack = () => {
    doc.update({ companyDescription: { description: description, imageUrl: imageUrl, unique: unique } })
    navigation.goBack();
  };


  const [description, setDescription] = useState(initialState?.description || "");
  const [unique, setUnique] = useState(initialState?.unique || "");
  const [imageUrl, setImageUrl] = useState(initialState?.imageUrl || "")

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
          <View style={styles.input}>
            <Textarea
              style={styles.text}
              rowSpan={7}
              placeholder={"Describe your company..."}
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <View style={styles.input}>
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
          <Avatar url={imageUrl} />
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
