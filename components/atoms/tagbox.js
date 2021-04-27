import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TAG } from "../../styles/colors";
import { FONT_SIZE_REGULAR } from "../../styles/typography";

const Tagbox = ({ color, text, clickable }) => {
  const [active, setActive] = useState(false);

  const tagClick = () => {
    if(clickable === true) setActive(!active);
  }

  const themeColor = color === undefined ? TAG : color;
  const textStyle = [
    styles.text,
    active ? { color: "white" } : { color: themeColor },
  ];
  const boxStyle = [
    styles.box,
    { borderColor: themeColor },
    active
      ? { backgroundColor: themeColor }
      : { backgroundColor: "transparent" },
  ];

  return (
    <TouchableOpacity onPress={() => tagClick()}>
      <View style={boxStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Tagbox;

const styles = StyleSheet.create({
  box: {
    padding: 6,
    borderWidth: 2,
    borderRadius: 18,
    margin: 5,
  },
  text: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: FONT_SIZE_REGULAR,
  },
});
