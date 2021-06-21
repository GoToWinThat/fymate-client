import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Icon, Thumbnail } from "native-base";
import * as ImagePicker from "expo-image-picker";

//Add image to Avatar.
//if u wanna rise state up , pass onClick in props

//Example use:
// <Avatar url="https://cont4.naekranie.pl/media%2Fcache%2Farticle-cover%2F2016%2F07%2Fneytiri-avatar-5824.jpg"/>
export default Avatar = ({ url, onImageChosen }) => {
  //url is started image -> image from firebase ...

  const [image, setImage] = useState(url);


  useEffect(() => {
    if (Platform.OS !== "web") {
      ImagePicker.requestMediaLibraryPermissionsAsync().then(({ status }) => {
        if (status !== "granted") {
          alert("Permision denied!");
        }
      });
    }
  }, []);



  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: false,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      if (onImageChosen !== undefined)
        onImageChosen(result.uri)
    }
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={PickImage}>
        <ImageBackground
          source={{ uri: url }}
          style={{ width: 120, height: 120 }}
          imageStyle={{ borderRadius: 100 }}
        >
          <View style={styles.icon}>
            <Icon name="add-circle-sharp" style={{ color: "blue" }} />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
