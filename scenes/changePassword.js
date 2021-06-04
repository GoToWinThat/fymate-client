import {
  View,
  Container,
  Header,
  Content,
  Input,
  Text,
  ListItem,
  Form,
} from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import Btn from "../components/atoms/btn";
import TopBar from "../components/atoms/topbar";
import {SCREEN_PADDING} from '../styles/spacing'

export default ChangePassword = ({ navigation }) => {
  const onClickGoBack = () => {
    navigation.goBack();
  };

  const [oldPass, setOldPass] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  return (
    <Container>
      <Header>
        <TopBar title="Change Password" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <Form>
          <ListItem itemDivider>
            <Text>PASSWORD</Text>
          </ListItem>
          <View style={styles.input}>
            <Input
              placeholder="Old password"
              value={oldPass}
              onChangeText={setOldPass}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder="New password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder="Repeat new password"
              value={repeatPass}
              onChangeText={setRepeatPass}
            />
          </View>
          <Btn
            text="Submit"
            onPress={() => submit([first, second, date, desc])}
          />
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
