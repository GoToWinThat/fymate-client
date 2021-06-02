import React, {useState} from "react";
import { Body, Button, Container, Left, Right, Header, Title, Content, ActionSheet } from "native-base";
import OfferList from "../components/molecules/offerlist";
import TagFilter from "../components/organisms/tagfilter";
import TopBar from '../components/atoms/topbar'
import UsersList from '../components/organisms/usersList'
import CompanyList from '../components/organisms/companyList'
import Searchbar from '../components/molecules/searchbar'

export default Board = ({ route, navigation }) => {

  //State for changing content list /Users /Company
  const [activePage, setActivePage] = useState('Users');


  //Put in props after create list of offert
  const onClickChangeViewOffert = () => {
    navigation.navigate('Offert', {
      screen: 'Offert'
    })
  }

  const onClickNavigateFilters = () => {
    navigation.navigate('Filters', {
      screen: 'Filters'
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

  //Show there tag list
  const onClickShowTagList = () => {

  }


  return (
    <Container >
      <Header>
        <TopBar title="Fymate" onClickRightIcon={onClickNavigateFilters} rightIcon="filter"/>
      </Header>
      <Searchbar/>

      <Content>
        {activePage === "Users" ? <UsersList/> : <CompanyList/> }
      </Content>
    </Container>
  );
};
//<OfferList/>
//<TagFilter/> 

