import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tagbox from '../atoms/tagbox'

const TagList = () => {
  const tags = [
    "React",
    "SQL",
    "Python",
    "Java",
    "Angular",
    "HTML",
    "Ruby",
    "JIRA",
  ];

  const list = tags.map((tag) => <Tagbox key={tag} text={tag} />);

  return <View style={styles.list}>{list}</View>;
};
export default TagList;

const styles = StyleSheet.create({
    list: {
      flexDirection: 'row',
      flexWrap: "wrap"
    },
  });