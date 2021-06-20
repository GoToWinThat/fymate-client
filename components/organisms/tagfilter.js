import React from "react";
import { View } from "native-base";
import TagList from "../molecules/tagList";
import { useEffect, useState } from "react/cjs/react.production.min";

export default TagFilter = ({ initialTags, activeTagsChangedCallback, tags, colors, labels }) => {

  const tagsArr = tags || [
    ["SQL", "Oracle", "C#", "Python", "Javascript", "Ruby", "Linux"],
    ["Full", "Office", "Partly"],
    ["Junior", "Mid", "Senior"],
    ["1/4", "1/8", "1/2", "Full"],
    ["B2B", "Job"],
  ];
  const colorsArr = colors || ["blue", "purple", "green", "orange", "red"];
  const labelsArr = labels || [
    "Tech Stack",
    "Work Remote",
    "Experience",
    "Work Time",
    "Agreement",
  ];

  const initialTagsState = initialTags !== undefined ? initialTags : []; //Force TagLists to use the same array


  const allTags = tagsArr.map((list, index) => {
    return (
      <TagList
        key={index}
        tags={list}
        color={colorsArr[index]}
        clickable={true}
        title={labelsArr[index]}
        activeTagsChangedCallback={activeTagsChangedCallback}
        initialTags={initialTagsState}
      />
    );
  });

  return (
    <View>
      {allTags}
    </View>
  );
};

