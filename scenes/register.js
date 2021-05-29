import { Button, Container, Content, Text, View, Input } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as firebase from 'firebase';
import { useState } from "react";
import Segmentbar from '../components/molecules/segmentbar';
import Btn from '../components/atoms/btn'

//TODO: Repeat password UI state handling
export default Register = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Employee");

  const onClickSignUp = () => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((results) => {

        const userUid = results.user.uid;

        //TODO: Finish account schema
        const account = {
          about: "",
          firstName: "",
          lastName: "",
          location: "",
          company: "",
        }

        firebase.firestore().collection("users").doc(userUid).set(account)
          .then(() => {
            navigation.navigate("Board", {
              screen: "Board",
              uid: userUid,
            });
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            console.log(error);

            //TODO: Dispose of user account somehow (maybe move document creation to cloud function)
          });

      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          //TODO: handle weak password in UI
          alert('The password is too weak.');
        } else {
          //TODO: handle critical error in UI
          alert(errorMessage);
        }
        console.log(error);
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
                <FontAwesome5 name="envelope" size={24} color="black" />
              </View>

              <Input onChangeText={setEmail} placeholder="Email" />
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>

              <Input onChangeText={setPassword} placeholder="Password" />
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>
              <Input placeholder="Repeat Password" />
            </View>

            <View>
              <Segmentbar onClickChange={setType}/>
            </View>
          </View>
          <View style={styles.marginHor}>
            <Btn text="Sign Up" onPress={onClickSignUp}/>
            {/* <Button style={styles.btn} onPress={() => onClickSignUp()}>
              <Text style={styles.btnText}>Sign Up</Text>
            </Button> */}
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
