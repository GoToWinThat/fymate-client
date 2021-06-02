import { View, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import TopBar from "../components/atoms/topbar";
import Segmentbar from "../components/molecules/segmentbar";
import TagList from "../components/molecules/tagList";
import TagFilter from "../components/organisms/tagfilter";

export default Filters = ({ navigation }) => {
  const onClickGoBack = () => {
    navigation.goBack();
  };

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
          <TagFilter/>
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
