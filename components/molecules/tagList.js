import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Tagbox from "../atoms/tagbox";
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {SCREEN_PADDING} from '../../styles/spacing'

const TagList = ({ tags, color, title, clickable}) => {

const [activeTags, setActiveTags] = useState([])

const AddRemoveFromActiveList = (tag) => {
  let arr = activeTags;
  if(arr.includes(tag)){
    const index = arr.indexOf(tag);
    arr.splice(index, 1);
  }  else {
    arr.push(tag);
  }
  setActiveTags(arr);
  console.log(activeTags)
}

 const list = tags.map((tag) => {
   return (
    <Tagbox
      key={tag}
      text={tag}
      color={color}
      clickable={clickable}
      selectTag={AddRemoveFromActiveList}
    />
  )
 });

  return (
    <View style={styles.tagList}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>{list}</View>
    </View>
  );
};
export default TagList;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  title: {
    fontSize: FONT_SIZE_LABEL,
    fontWeight: "bold",
  },
  tagList: {
    paddingVertical: 5,
    paddingHorizontal: SCREEN_PADDING
  },
});
