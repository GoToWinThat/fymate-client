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
  const onGoBack = route?.params?.onGoBackCallback
  const initialFilterState = route?.params?.initialFilterState;

  const [tags, setTags] = useState(initialFilterState?.tags !== undefined ? initialFilterState.tags : []);
  const [searchType, setSearchType] = useState(initialFilterState?.searchType !== undefined ? initialFilterState.searchType : "Company");
  const onClickGoBack = () => {
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

  //TODO: setting initial value of segment bar
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
        <TagFilter initialTags={tags} activeTagsChangedCallback={setTags} />
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
