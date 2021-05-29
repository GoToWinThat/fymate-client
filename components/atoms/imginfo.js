import React from "react";
import { StyleSheet } from "react-native";
import { Thumbnail, Text, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const ImgInfo = ({
  company,
  solary,
  location,
  size,
  url,
  title,
  job,
  color,
}) => {
  const iconSize = 19;

  return (
    <View style={styles.box}>
      <Thumbnail source={{ uri: url }} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>

      {job !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="briefcase-sharp"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{job}</Text>
        </View>
      ) : null}

      {company !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="business"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{company}</Text>
        </View>
      ) : null}

      {solary !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="ios-card-outline"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{solary}</Text>
        </View>
      ) : null}

      {location !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="location-sharp"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{location}</Text>
        </View>
      ) : null}

      {size !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="md-people"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{size}</Text>
        </View>
      ) : null}
    </View>
  );
};
export default ImgInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    textAlign: "center",
    paddingVertical: 5,
  },
  text: {
    color: "black",
    fontSize: 14,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    marginVertical: 2,
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  box: {
    padding: 10,
  },
});
