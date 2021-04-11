import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Featurebox = ({ text, title, icon }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.icon}>{icon}</View>
      <View>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text> {text} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    textAlign: "center",
  },
  screen: {

    //marginHorizontal: 40,
    flexDirection: "row",
    //marginVertical: 10,
    paddingLeft: '10%',
    paddingRight: '30%',
    paddingBottom: '10%',
  },
  icon: {
    paddingRight: 25,
    //paddingLeft: 25,
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 25,
  },
  text: {
    flexShrink: 1,
  },
});
