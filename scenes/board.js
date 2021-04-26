import React, {useState} from "react";
import { Body, Button, Container, Left, Right, Header, Title, Content } from "native-base";
import Boardheader from '../components/atoms/boardheader'
import OfferList from "../components/molecules/offerlist";
import TagFilter from "../components/organisms/tagfilter";

import UsersList from '../components/organisms/usersList'
import CompanyList from '../components/organisms/companyList'

export default Board = ({ route, navigation }) => {

  //State for changing content list /User /Company
  const [activePage, setActivePage] = useState('User');


  //Put in props after create list of offert
  const onClickChangeViewOffert = () => {
    navigation.navigate('Offert', {
      screen: 'Offert'
    })
  }
  const onClickChangeViewAccount = () => {
    navigation.navigate('Account', {
        screen: 'Account',
        uid: route.params.uid,
    })
  }

  const onClickChangeActivePage = (page) => {
    setActivePage(page);
    console.log(activePage);
  }

  return (
    <Container >
      <Boardheader  onClickGoToAccount={onClickChangeViewAccount} 
                    onClickChangeActivePage={onClickChangeActivePage}/>
      <Content>
        {activePage === "Users" ? <UsersList/> : <CompanyList/> }
      </Content>
    </Container>
  );
};
//<OfferList/>
//<TagFilter/> 

