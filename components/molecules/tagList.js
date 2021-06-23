import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Tagbox from "../atoms/tagbox";
import { FONT_SIZE_LABEL } from '../../styles/typography'
import { SCREEN_PADDING } from '../../styles/spacing'

const TagList = ({ tags, color, title, clickable, initialTags, activeTagsChangedCallback, singleChoice }) => {

  const [activeTags, setActiveTags] = useState(initialTags !== undefined ? new Set(initialTags) : new Set());

  const AddRemoveFromActiveSet = (tag) => {
    if (!singleChoice) {
      if (activeTags.has(tag)) {
        activeTags.delete(tag)
      }
      else {
        activeTags.add(tag)
      }
      setActiveTags(new Set(activeTags));
      if (activeTagsChangedCallback !== undefined && activeTagsChangedCallback !== null) {
        activeTagsChangedCallback(Array.from(activeTags));
      }
    }
    else {
      if (activeTags.has(tag)) {
        setActiveTags(new Set())
      }
      else {
        setActiveTags(new Set([tag]));
      }
    }
  }

  const onTagClicked = (tag) => {
    AddRemoveFromActiveSet(tag);
  }

  const list = tags?.map((tag) => {
    return (
      <Tagbox
        key={tag}
        text={tag}
        color={color}
        onClick={clickable ? onTagClicked : null}
        active={activeTags.has(tag)}
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
