import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { isNotUndefinedOrEmpty } from "../../globals";

const TitleInfo = ({ title, company, salary, location, email, web, phone, time }) => {
  const iconSize = 18;
  const color = "gray";

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>

      {isNotUndefinedOrEmpty(company) ? (
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

      {isNotUndefinedOrEmpty(salary) ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="ios-card-outline"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{salary}</Text>
        </View>
      ) : null}

      {isNotUndefinedOrEmpty(email) ? (
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

      {isNotUndefinedOrEmpty(phone) ? (
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

      {isNotUndefinedOrEmpty(web) ? (
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

      {isNotUndefinedOrEmpty(location) ? (
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

      {isNotUndefinedOrEmpty(time) ? (
        <View style={styles.row}>
          <Ionicons
            style={styles.icon}
            name="time-outline"
            size={iconSize}
            color={color}
          />
          <Text style={styles.text}>{time}</Text>
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
