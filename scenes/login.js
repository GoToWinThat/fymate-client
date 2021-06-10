import { Button, Container, Content, Text, View, Input } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as firebase from 'firebase'
import { useState } from "react";
import Btn from '../components/atoms/btn'

//TODO: Handle login failure
export default Login = ({ navigation }) => {

  //Check if we are already logged in
  if (firebase.auth().currentUser != null) {
    navigation.navigate("MainTab", { screen: "MainTab" });
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((results) => {
        navigation.navigate("MainTab", {
          screen: "MainTab",
          uid: results.user.uid,
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  const onClickSignUp = () => {
    navigation.navigate("Register", {
      screen: "Register",
    });
  };


  return (
    <Container>
      <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Find</Text>
            <Text style={styles.title}>Your</Text>
            <Text style={styles.title}>Mates</Text>
          </View>

          <View style={styles.marginHor}>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="user-circle" size={24} color="black" />
              </View>

              <Input onChangeText={setEmail} placeholder="Email" />
            </View>

            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>

              <Input onChangeText={setPassword} placeholder="Password" />
            </View>

            <TouchableOpacity onPress={() => onClickSignUp()}>
              <Text style={styles.touchableText}>Don't have an account? Click here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.marginHor}>
            <Btn text="Sign In" onPress={onClickSignIn} />
          </View>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  touchableText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
  },
  title: {
    fontSize: 55,
  },
  marginHor: {
    width: "100%",
    justifyContent: 'space-around',
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
