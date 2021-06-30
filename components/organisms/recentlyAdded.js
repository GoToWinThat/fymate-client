import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Thumbnail } from "native-base";
import { FONT_SIZE_LABEL } from "../../styles/typography";
import { ELEMENT_PADDING, SCREEN_PADDING } from "../../styles/spacing";
import OfferList from "../molecules/offerlist";
import * as firebase from "firebase";

export default RecentlyAdded = ({ list }) => {
  return (
    <View style={styles.aboutView}>
      {list !== undefined && list.length !== 0 ? (
        <>
          <Text style={styles.title}>Recently Added</Text>
          <OfferList list={list} />
          <Text style={[styles.title, { marginTop: 20 }]}>Offers</Text>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  aboutView: {
    paddingVertical: ELEMENT_PADDING,
    paddingHorizontal: SCREEN_PADDING,
  },
  title: {
    fontSize: FONT_SIZE_LABEL,
    fontWeight: "bold",
  },
  thumbnail: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginVertical: 20,
  },
});
