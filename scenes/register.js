import { Button, Container, Content, Text, View, Input } from "native-base";
import React from "react";
import { StyleSheet,Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as firebase from 'firebase';
import { useState } from "react";
import Segmentbar from '../components/atoms/segmentbar';
import Btn from '../components/atoms/btn'
import education from "./education";
import companyDescription from "./companyDescription";
import { formStyle } from '../styles/style'
import { ScrollView } from "react-native-gesture-handler";

//TODO: Repeat password UI state handling
export default Register = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Employee"); //TODO: add company account creation

  const onClickSignUp = () => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((results) => {

        const userUid = results.user.uid;

        let account = { //company account template
          type: type,
          about: "",
          email: "",
          location: "",
          phone: "",
          avatarUrl: "",
          tags: [],
          contacts: {
            phone: "",
            mail: email,
            github: "",
          },
          companyDescription: {
            description: "",
            unique: "",
            imageUrl: "",
          }
        }

        if (type === "Employee") {
          account = { //employee account template
            type: type,
            about: "",
            company: "",
            email: "",
            location: "",
            name: "",
            surname: "",
            phone: "",
            avatarUrl: "",
            details: {
              contract: "",
              jobtime: "",
              position: "",
              starttime: "",
              worktype: "",
            },
            education: [],
            experience: [],
            projects: [],
            tags: [],
            contacts: {
              phone: "",
              mail: email,
              github: "",
            }
          }
        }


        firebase.firestore().collection("users").doc(userUid).set(account)
          .then(() => {
            navigation.navigate("MainTab", {
              screen: "MainTab",
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
      <Content>
      <ScrollView>
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Join</Text>
            <Text style={styles.title}>Fymate</Text>
            <Text>Find your first job with us</Text>
          </View>


          <View style={styles.marginHor}>

            <View style={formStyle.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="envelope" size={24} color="black" />
              </View>

              <Input onChangeText={setEmail} placeholder="Email" />
            </View>
            <View style={formStyle.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>

              <Input secureTextEntry={true} onChangeText={setPassword} placeholder="Password" />
            </View>
            <View style={formStyle.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>
              <Input secureTextEntry={true} placeholder="Repeat Password" />
            </View>

            <View style={styles.segmented}>
              <Segmentbar onClickChange={setType} />
            </View>
          </View>
          <View style={styles.marginHor}>
            <Btn text="Sign Up" onPress={onClickSignUp} />
            {/* <Button style={styles.btn} onPress={() => onClickSignUp()}>
              <Text style={styles.btnText}>Sign Up</Text>
            </Button> */}
          </View>
        </View>
        </ScrollView>
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
    alignItems: "center",
    height: Dimensions.get("window").height,
    paddingTop: "15%",
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
  icon: {
    marginTop: 12,
    marginRight: 15,
  },
  segmented: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30
  }
});
