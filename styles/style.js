import { Dimensions, StyleSheet } from "react-native";
import { SCREEN_PADDING } from './spacing'

const formStyle = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    text: {
      marginVertical: 20,
      width: "100%",
      fontSize: 17,
    },
    input: {
      flexDirection: "row",
      borderWidth: 1.3,
      borderRadius: 40,
      paddingHorizontal: 20,
      borderColor: "gray",
      marginVertical: 10,
      marginHorizontal: SCREEN_PADDING,
    },
    textArea: {
      flexDirection: "row",
      marginHorizontal: SCREEN_PADDING,
      width: Dimensions.get("window").width - 40,
    },
  });

  export {formStyle}