import { Button, Container, Content, Text, View, Input } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as firebase from 'firebase'
import { useState } from "react";
import Btn from '../components/atoms/btn'
import { formStyle } from '../styles/style'

//TODO: Handle login failure
export default Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignIn = () => {
    //"tester@mail.com", "1q2w3e4r"
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
      <ScrollView>
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Find</Text>
            <Text style={styles.title}>Your</Text>
            <Text style={styles.title}>Mates</Text>
          </View>

          <View style={styles.marginHor}>
            <View style={formStyle.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="user-circle" size={24} color="black" />
              </View>

              <Input onChangeText={setEmail} placeholder="Email" />
            </View>

            <View style={formStyle.input}>
              <View style={styles.icon}>
                <FontAwesome5 name="lock" size={24} color="black" />
              </View>

              <Input secureTextEntry={true} onChangeText={setPassword} placeholder="Password" />
            </View>

            <TouchableOpacity onPress={() => onClickSignUp()}>
              <Text style={styles.touchableText}>Don't have an account? Click here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.marginHor}>
            <Btn text="Sign In" onPress={onClickSignIn} />
          </View>
        </View>
      </ScrollView>
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
});
