import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const TitleInfo = ({ title, company, solary, location, email, web, phone }) => {
  const iconSize = 18;
  const color = "gray";

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>

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

      {email !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="mail"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{email}</Text>
        </View>
      ) : null}

      {phone !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="call-sharp"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{phone}</Text>
        </View>
      ) : null}

      {web !== undefined ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="at"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{web}</Text>
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
    </View>
  );
};
export default TitleInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    paddingVertical: 5,
  },
  text: {
    color: "gray",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    marginVertical: 1,
  },
  icon: {
    marginRight: 10,
  },
  box: {
    paddingVertical: 5,
    paddingLeft: 15,
  },
});
