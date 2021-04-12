import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tagbox from "../atoms/tagbox";

const TagList = ({ tags, color, title }) => {
  const list = tags.map((tag) => <Tagbox key={tag} text={tag} color={color} />);

  return (
    <View style={styles.tagList}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>{list}</View>
    </View>
  );
};
export default TagList;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  tagList: {
    marginBottom: 10,
  },
});
