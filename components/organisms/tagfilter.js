import React, { useEffect, useState } from "react";
import { View } from "native-base";
import TagList from "../molecules/tagList";

//TODO: single choice xd
export default TagFilter = ({ activeTagsChangedCallback, tags, colors, labels, initialTags, singleChoices }) => {

  const [activeTags, setActiveTags] = useState(initialTags)

  const tagsChangedCallback = (prop, tags) => {
    activeTags[prop] = tags
    //make sure that active tags has all the required fields
    for (const prop in tags) {
      if (activeTags[prop] === undefined)
        activeTags[prop] = []
    }
    setActiveTags({ ...activeTags });
    activeTagsChangedCallback(activeTags)
  }

  const tagLists = []
  for (const prop in tags) {
    let single = undefined
    if (singleChoices !== undefined)
      single = singleChoices[prop]
    tagLists.push(
      <TagList
        key={prop}
        tags={tags[prop]}
        color={colors[prop]}
        title={labels[prop]}
        activeTagsChangedCallback={(tags) => {
          tagsChangedCallback(prop, tags)
        }}
        initialTags={initialTags[prop]}
        clickable={true}
        singleChoice={single}
      />)
  }

  return (
    <View>
      {tagLists}
    </View>
  );
};

