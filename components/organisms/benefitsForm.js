import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "native-base";
import BenefitsList from "../molecules/benefitsList";
import {SCREEN_PADDING, ELEMENT_PADDING} from '../../styles/spacing'
//In props add array of benefits ["" , "" , ""] , and in onClickAddBenefit return String
export default BenefitsForm = ({ benefits, onClickAddBenefit, onClickDeleteBenefit }) => {
  const [benefit, setBenefit] = useState("");

  return (
    <View style={ styles.form}>
        <Input
          onChangeText={setBenefit}
          onSubmitEditing={() => onClickAddBenefit(benefit)}
          placeholder="Feature..."
          style={styles.input}
        />
      <View style={styles.viewList}>
        <BenefitsList benefits={benefits} onClickDeleteBenefit={onClickDeleteBenefit}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewList: {
    paddingHorizontal: SCREEN_PADDING + 20,
  },
  input: {
    flexDirection: "row",
    paddingLeft: 20,
    borderWidth: 1.3,
    borderRadius: 40,
    borderColor: "gray",
    marginVertical: 10,
    marginHorizontal: SCREEN_PADDING,
  },
  form: {
    paddingVertical:ELEMENT_PADDING,
  }
});
