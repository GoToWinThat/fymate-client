import { View, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import TopBar from "../components/atoms/topbar";
import Segmentbar from "../components/molecules/segmentbar";
import TagList from "../components/molecules/tagList";

export default Filters = ({ navigation }) => {
  const onClickGoBack = () => {
    navigation.goBack();
  };

  const tagsArr = [
    ["SQL", "Oracle", "C#", "Python", "Javascript", "Ruby", "Linux"],
    ["Full", "Office", "Partly"],
    ["Junior", "Mid", "Senior"],
    ["1/4", "1/8", "1/2", "Full"],
    ["B2B", "Job"],
  ];
  const colors = ["blue", "purple", "green", "orange", "red"];
  const labels = [
    "Tech Stack",
    "Work Remote",
    "Experience",
    "Work Time",
    "Agreement",
  ];
  const allTags = tagsArr.map((list, index) => {
    return (
      <TagList
        key={index}
        tags={list}
        color={colors[index]}
        clickable={true}
        title={labels[index]}
      />
    );
  });

  return (
    <Container>
      <Header>
        <TopBar title="Filters" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
          <View>
            <Text style={styles.title}>Range:</Text>
            <Segmentbar/>
          </View>
          {allTags}
          </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    textAlign: "center",
    paddingVertical: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
