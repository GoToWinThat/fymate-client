import { Button, Container, Content, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Featurebox from "../components/atoms/featurebox";
import { Entypo } from "@expo/vector-icons";


export default Onboarding = ({ navigation }) => {
  const onClickChangeView = () => {
    navigation.navigate("Login", {
      screen: "Login",
    });
  };


  const tt =
    "Vestibulum bibendum lorem vitae risus accumsan facilisis. Integer ullamcorper dignissim nibh, ut consectetur lacus tincidunt et. Aenean porttitor turpis tortor";

  return (
        <View style={styles.screen}>
          <Text style={styles.title}>Fymate</Text>

          <View>
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
          </View>

          <Button style={styles.next} onPress={() => onClickChangeView()}>
            <Text style={styles.text}>Next</Text>
          </Button>
        </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    textAlign: "center",
  },
  screen: {
    justifyContent: "space-evenly",
    paddingHorizontal: 50,
    height: '100%'
  },
  featureView: {
    flexDirection: "row",
  },
  next: {
    width: "100%",
    color: "white",
  },
  content: {
    backgroundColor: 'blue',
    flex: 1
  },
  container:{
    backgroundColor: 'red',
  },
  text: {
    textAlign: 'center',
    width: '100%'
  }
});
