import React from "react";
import { StyleSheet } from "react-native";
import { Thumbnail, Text, View } from "native-base";
import { Ionicons } from '@expo/vector-icons';

const ImgProfile = ({ company, solary, location, size, url, title }) => {
  return (
    <View style={styles.box}>
      <Thumbnail source={{ uri: url }} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>

      {company !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="briefcase-sharp"
            size={24}
            color="gray"
          />
          <Text note>{company}</Text>
        </View>
      ) : null}

      {solary !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="ios-card-outline"
            size={24}
            color="gray"
          />
          <Text note>{solary}</Text>
        </View>
      ) : null}

      {location !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="location-sharp"
            size={24}
            color="gray"
          />
          <Text note>{location}</Text>
        </View>
      ) : null}

      {size !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="md-people"
            size={24}
            color="gray"
          />
          <Text note>{size}</Text>
        </View>
      ) : null}
    </View>
  );
};
export default ImgProfile;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center'
  },
  row: {
    flexDirection: "row",
    marginVertical: 2,
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10,
  },
  box: {
  }
});
