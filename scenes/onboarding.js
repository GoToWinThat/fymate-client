import { Button, Container, Content, Text, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Featurebox from '../components/atoms/featurebox'
import { Ionicons } from '@expo/vector-icons';
import Btn from '../components/atoms/btn';
import * as firebase from 'firebase';

export default Onboarding = ({ navigation }) => {

  const [userAuthed, setUserAuthed] = useState(false);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(firebase.auth().currentUser.uid)
      navigation.navigate("MainTab", { screen: "MainTab" });
    }
    else {
      setUserAuthed(true);
    }
  });

  const onClickChangeView = () => {
    navigation.navigate("Login", {
      screen: "Login",
    });
  };

  const tt =
    "Vestibulum r dignissim nibh, ut consectetur lacus tincidunt et. Aenean porttitor turpis tortor";

  return (
    <>
      {userAuthed === true ?
        <Container>
          <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
            <View style={styles.screen}>
              <Text style={styles.title}>Fymate</Text>
              <Featurebox
                title={"Search"}
                text={"for best offerts possible and candidates. Choose from many tech tags available in our application and specify details like time duration or expected experience."}
                icon={<Ionicons name="search-circle" size={60} color="black" />}
              />
              <Featurebox
                title={"Save"}
                text={"you can store your favorites offerts and candidates in application in one place accessible everywhere. Apply for your favorite offerts and don't miss deadline"}
                icon={<Ionicons name="heart-sharp" size={60} color="black" />}
              />
              <Featurebox
                title={"Edit"}
                text={"create a custom profile with your experience, projects, education and more. Show everyone what you can do. Add offerts for position you are interested in."}
                icon={<Ionicons name="brush-sharp" size={60} color="black" />}
              />
              {/* <Button style={styles.next} onPress={() => onClickChangeView()}>
            <Text style={styles.text}>Next</Text>
          </Button> */}
              <Btn onPress={onClickChangeView} text="Next"></Btn>
            </View>
          </Content>
        </Container> : null}
    </>
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
