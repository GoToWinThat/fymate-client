import { View, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import TopBar from "../components/atoms/topbar";
import Segmentbar from "../components/atoms/segmentbar";
import TagFilter from "../components/organisms/tagfilter";
import { SCREEN_PADDING, ELEMENT_PADDING } from '../styles/spacing'
import { FONT_SIZE_LABEL } from '../styles/typography'
import { useState } from "react";

export default Filters = ({ route, navigation }) => {
  const onGoBack = route.params?.onGoBackCallback

  const [tags, setTags] = useState([]);
  const [searchType, setSearchType] = useState("Company");
  const onClickGoBack = () => {
    console.log({ tags, val: searchType });
    if (onGoBack !== undefined) {
      onGoBack(
        {
          tags: tags,
          searchType: searchType
        }
      );
    }
    navigation.goBack();
  };



  return (
    <Container>
      <Header>
        <TopBar title="Filters" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <View style={styles.container}>
          <Text style={styles.title}>Range</Text>
          <Segmentbar onClickChange={(v) => setSearchType(v)} />
        </View>
        <TagFilter initialTags={[]} activeTagsChangedCallback={setTags} />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZE_LABEL,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: SCREEN_PADDING
  }
});
