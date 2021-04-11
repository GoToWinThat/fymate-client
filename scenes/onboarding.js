import { Button, Container, Content, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Featurebox from "../components/atoms/featurebox";
import { Entypo } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";

export default Onboarding = ({ navigation }) => {
  const onClickChangeView = () => {
    navigation.navigate("Login", {
      screen: "Login",
    });
  };

  const tt =
    "Vestibulum r dignissim nibh, ut consectetur lacus tincidunt et. Aenean porttitor turpis tortor";

  return (
    <Container>
      <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
        <View style={styles.screen}>
          <Text style={styles.title}>Fymate</Text>
          <Featurebox
            title={"Easy Work"}
            text={tt}
            icon={<Entypo name="chat" size={50} color="black" />}
          />
          <Featurebox
            title={"It's Free"}
            text={tt}
            icon={<Entypo name="credit-card" size={50} color="black" />}
          />
          <Featurebox
            title={"Fast and Quick"}
            text={tt}
            icon={<Entypo name="back-in-time" size={50} color="black" />}
          />
          <Button style={styles.next} onPress={() => onClickChangeView()}>
            <Text style={styles.text}>Next</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    textAlign: "center",
    marginVertical: "10%",
  },
  screen: {
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    height: "100%",
    paddingVertical: "15%",
  },
  featureView: {
    flexDirection: "row",
  },
  next: {
    width: "100%",
    color: "white",
  },
  contentItems: {
    flex: 1,
  },
  container: {
    backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    width: "100%",
  },
  view: {
    alignItems: "center",
  },
});
