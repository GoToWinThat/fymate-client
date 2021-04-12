import React from "react";
import { Body, Button, Container, Left, Right, Header, Title, Content } from "native-base";
import Boardheader from '../components/atoms/boardheader'
import OfferList from "../components/molecules/offerlist";
import TagFilter from "../components/organisms/tagfilter";

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
    <Container >
      <Boardheader onClickGoToAccount={onClickChangeViewAccount}/>
      <Content>
        <TagFilter/> 
        
      </Content>
    </Container>
  );
};
//<OfferList/>
