import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TAG } from "../../styles/colors";

const Tagbox = ({ color, text, onClick, active }) => {

  const tagClick = () => {
    if (onClick)
      onClick(text)
  }

  const themeColor = color === undefined ? TAG : color;
  const textStyle = [
    styles.text,
    active ? { color: "white" } : { color: themeColor },
  ];
  const boxStyle = [
    styles.box,
    { borderColor: themeColor },
    active === true
      ? { backgroundColor: themeColor }
      : { backgroundColor: "transparent" },
  ];

  return (
    <TouchableOpacity onPress={() => tagClick()} activeOpacity={1}>
      <View style={boxStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Tagbox;

const styles = StyleSheet.create({
  box: {
    padding: 5,
    borderWidth: 1.3,
    borderRadius: 20,
    margin: 5,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
  },
});
