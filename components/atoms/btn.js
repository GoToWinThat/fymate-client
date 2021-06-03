import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

export default Btn = ({ text, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.btn}
        onPress={onPress !== undefined ? () => onPress() : null}
      >
        <View style={styles.textBox}>
        {icon !== undefined ? (
          <Icon style={styles.icon} name={icon} size={12} color="white"></Icon>
        ) : null}
        <Text style={styles.text}>{text}</Text>
      
        </View>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: SCREEN_PADDING,
      paddingVertical: ELEMENT_PADDING,
  },
  btn: {
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  textBox: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  }
});
