import React from "react";
import { Thumbnail, ListItem, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default OfferListBox = ({ title, location, payment, url, company, time }) => {
  const mode = company === undefined ? false : true;
  const timemode = time === undefined ? false : true;
  const paymentmode = payment === undefined ? false : true;
  const locationmode = location === undefined ? false : true;

  const paymentItem = paymentmode ? (
    <View style={styles.row}>
      <Ionicons
        style={styles.icon}
        name="ios-card-outline"
        size={24}
        color="gray"
      />
      <Text note>{payment}</Text>
    </View>
  ) : null

  const listItem = mode ? (
    <View style={styles.row}>
      <Ionicons
        style={styles.icon}
        name="briefcase-sharp"
        size={24}
        color="gray"
      />
      <Text note>{company}</Text>
    </View>
  ) : null;

  const lenghtOfWork = timemode ? (
    <View style={styles.row}>
      <Ionicons
        style={styles.icon}
        name="md-time-outline"
        size={24}
        color="gray"
      />
      <Text note>{time}</Text>
    </View>
  ) : null;

  const locationItem = locationmode ? (
    <View style={styles.row}>
      <Ionicons
        style={styles.icon}
        name="location-sharp"
        size={24}
        color="gray"
      />
      <Text note>{location}</Text>
    </View>

  ) : null;

  return (
    <ListItem>
      <Thumbnail
        source={{ uri: url }}
        style={mode ? styles.thumbnailSquare : styles.thumbnail}
      />

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        {lenghtOfWork}
        {listItem}
        {locationItem}
        {paymentItem}

      </View>
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
