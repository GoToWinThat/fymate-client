import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TagList from '../components/molecules/tagList';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from "native-base";


export default Board = ({ navigation }) => {

  //Put in props after create list of offert
  const onClickChangeViewOffert = () => {
    navigation.navigate('Offert', {
      screen: 'Offert'
    })
  }

  const onClickChangeViewAccount = () => {
    navigation.navigate('Account', {
        screen: 'Account'
    })
  }

  return (
    <View>
      <Button><AntDesign onPress={() => onClickChangeViewAccount()} size={24} name="user" color="blue"/></Button>
      <TagList/> 
    </View>
  );
};

