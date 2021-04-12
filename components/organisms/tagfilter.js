import React from "react";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import TagList from "../molecules/tagList";

export default TagFilter = () => {
  const tech = [
    "React",
    "SQL",
    "Python",
    "Java",
    "Angular",
    "HTML",
    "Ruby",
    "JIRA",
  ];
  const exp = ["Junior", "Mid", "Senior"];
  const remote = ["Remote", "Partly Remote", "Office"];
  const time = ["1/8", "1/4", "1/2", "Full"];

  return (
    <View style={styles.filters}>
      <TagList tags={tech} color="blue" title="Technology" />
      <TagList tags={exp} color="green" title="Experince" />
      <TagList tags={time} color="red" title="Working Time" />
      <TagList tags={remote} color="purple" title="Location" />
    </View>
  );
};
const styles = StyleSheet.create({
  filters: {
    paddingHorizontal: 10,
  },
});
