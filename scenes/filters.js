import { View, Container, Content, Header, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import TopBar from "../components/atoms/topbar";
import Segmentbar from "../components/atoms/segmentbar";
import TagFilter from "../components/organisms/tagFilter";
import {SCREEN_PADDING, ELEMENT_PADDING} from '../styles/spacing'
import {FONT_SIZE_LABEL} from '../styles/typography'

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
          <View style={styles.container}>
            <Text style={styles.title}>Range</Text>
            <Segmentbar/>
          </View>
          <TagFilter/>
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
