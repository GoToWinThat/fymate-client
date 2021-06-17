import React from "react";
import { Container, Header, Content } from "native-base";
import TopBar from "../components/atoms/topbar";
import Searchbar from "../components/atoms/searchbar";
import OfferList from "../components/molecules/offerlist";
import { useState } from "react";
import { useEffect } from "react";
import * as firebase from 'firebase';


const defaultFilterState = {
  tags: [],
  searchType: "Employee",
  searchPhrase: ""
}


export default Board = ({ route, navigation }) => {
  const initialFilterState = route?.params?.filterState
  
  const accountType = "Company"; //Employee , Company
  const [list, setList] = useState([])
  const [filter, setFilter] = useState(initialFilterState !== undefined ? initialFilterState : defaultFilterState);

  useEffect(() => {
    if (accountType === "Employee") {
      //firebase.firestore().collection("offers").where()
    }
    else {
      //firebase.firestore().collection("users").where()
    }
  }, [])


  const onClickNavigateFilters = () => {
    navigation.navigate("Filters", {
      screen: "Filters",
    });
  };

  const onClickNavigateOffer = () => {
    navigation.navigate("Offert", {
      screen: "Offert",
    });
  };

  return (
    <Container>
      <Header>
        <TopBar
          title="Fymate"
          onClickRightIcon={onClickNavigateFilters}
          rightIcon="filter"
        />
      </Header>
      <Searchbar />

      <Content>
        <OfferList onClick={onClickNavigateOffer} list={list} />
      </Content>
    </Container>
  );
};
