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
    justifyContent: "center",
    marginHorizontal: 20,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    paddingRight: 25,
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 25,
  },
  text: {
    flexShrink: 1,
  },
});
