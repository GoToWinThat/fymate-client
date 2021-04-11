import { Button, Container, Content, Text, View, Input } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default Register = ({ navigation }) => {
  const onClickSingUp = () => {
    navigation.navigate("Board", {
      screen: "Board",
    });
  };
  return (
    <Container>
      <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Join</Text>
            <Text style={styles.title}>Fymate</Text>
            <Text>Find your first job with us</Text>
          </View>
          

          <View style={styles.marginHor}>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="user-circle" size={24} color="black" />
              </View>

              <Input placeholder="Username" />
            </View>

            <View style={styles.input}>
              <View style={styles.icon}>
              <FontAwesome5 name="envelope" size={24} color="black" />
              </View>

              <Input placeholder="Email" />
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>

              <Input placeholder="Password" />
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>

              <Input placeholder="Repeat Password" />
            </View>
          </View>
          <View style={styles.marginHor}>
            <Button style={styles.btn} onPress={() => onClickSingUp()}>
              <Text style={styles.btnText}>Sign Up</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 55,
  },
  marginHor: {
    width: "100%",
  },
  screen: {
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    alignItems: "center",
    height: "100%",
    paddingVertical: "15%",
  },
  featureView: {
    flexDirection: "row",
  },
  btn: {
    width: "100%",
    color: "white",
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    width: "100%",
  },
  input: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    marginTop: 12,
    marginRight: 15,
  },
});
