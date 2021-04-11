import React from "react";
import { Thumbnail, ListItem, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default UserListbox = ({ title, location, payment, url }) => {
  return (
    <ListItem>
      <Thumbnail source={{ uri: url }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="location-sharp"
            size={24}
            color="gray"
          />
          <Text note>{location}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="ios-card-outline"
            size={24}
            color="gray"
          />
          <Text note>{payment}</Text>
        </View>
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
  icon: {
    marginRight: 10,
  },
});
