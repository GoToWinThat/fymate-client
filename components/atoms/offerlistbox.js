import React from "react";
import { Thumbnail, ListItem, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TitleInfo from '../atoms/titleinfo';

export default OfferListBox = ({ title, location, payment, url, company, time }) => {
  const mode = company === undefined ? false : true;

  return (
    <ListItem>
      <Thumbnail
        source={{ uri: url }}
        style={mode ? styles.thumbnailSquare : styles.thumbnail}
      />
        <TitleInfo 
          title={title}
          company={company}
          solary={payment}
          location={location}
        />
    </ListItem>
  );
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    marginVertical: 2,
  },
  title: {
    fontSize: 22,
    alignSelf: "flex-start",
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  thumbnailSquare: {
    width: 90,
    height: 90,
  },
  icon: {
    marginRight: 10,
  },
});
