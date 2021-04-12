import React from "react";
import TagList from '../components/molecules/tagList';
import { Body, Button, Container, Left, Right, Header, Title, Content } from "native-base";
import Boardheader from '../components/atoms/boardheader'
import OfferList from "../components/molecules/offerlist";


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
    <Container>
      <Boardheader onClickGoToAccount={onClickChangeViewAccount}/>
      <Content>
        <TagList/> 
        
      </Content>
    </Container>
  );
};
//<OfferList/>
