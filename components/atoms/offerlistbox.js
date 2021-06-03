import React from "react";
import { Thumbnail, ListItem } from "native-base";
import { StyleSheet } from "react-native";
import TitleInfo from "./titleinfo";
import { TouchableOpacity } from "react-native-gesture-handler";

export default OfferListBox = ({
  title,
  location,
  payment,
  url,
  company,
  time,
  onClick,
}) => {
  const mode = company === undefined ? false : true;
  const navigateToOffer = onClick === undefined ? null : onClick;

  return (
    <TouchableOpacity onPress={navigateToOffer} activeOpacity={0.5}>
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
    </TouchableOpacity>
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
