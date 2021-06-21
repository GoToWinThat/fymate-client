import { Container, Content, Header } from "native-base";
import React, { useEffect, useState } from "react";
import TopBar from "../components/atoms/topbar";
import Offerlist from "../components/molecules/offerlist";
import UserList from "../components/molecules/offerlist";
import * as firebase from 'firebase'
import { chunk } from "../globals";

const defaultFilterState = {
  tags: [],
  searchType: "Company",
  searchPhrase: ""
}

export default Favorite = ({ navigation }) => {
  const uid = firebase.auth().currentUser.uid;
  const [accountInfo, setAccountInfo] = useState({ type: "Employee" });
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(defaultFilterState);

  const onReceivedNewFilter = (newFilter) => {
    filter.tags = newFilter.tags;
    filter.searchType = newFilter.searchType;
    setFilter({ ...filter }) //copy object to force rerender
  }

  //Fetch user data
  useEffect(() => {
    firebase.firestore().collection("users")
      .doc(uid)
      .get()
      .then(snap => {
        const data = snap.data()
        setAccountInfo(data);
      });
  }, [])

  //Fetches favourite offers and users
  useEffect(() => {

    const store = firebase.firestore();
    if (filter.searchType === "Company") {
      //divide input into 10s
      const promises = []
      if (accountInfo.favouriteOffers !== undefined) {
        for (const offer of accountInfo.favouriteOffers) {
          promises.push(store.collection("offers").doc(offer).get())
        }
        Promise.all(promises).then(x => x.map(y => y.data())).then(x => {
          console.log(x);
          setList(x);
        });
      }
    }
    else {

    }

  }, [accountInfo, filter])


  const onClickFilters = () => {
    navigation.navigate("Filters", {
      screen: "Filters",
      onGoBackCallback: onReceivedNewFilter,
      initialFilterState: filter
    });
  };

  const onOfferClicked = (offer) => {
    navigation.navigate("Offert", {
      screen: "Offert",
      offer: offer,
    });
  };

  const onUserClicked = (user) => {
    navigation.navigate("Account", {
      screen: "Account",
      type: "Employee",
      uid: user.uid,
    });
  };


  return (
    <Container>
      <Header>
        <TopBar
          title="Fymate"
          onClickRightIcon={onClickFilters}
          rightIcon="filter"
        />
      </Header>
      <Content>
        {filter.searchType === "Company" ? (
          <Offerlist onClick={onOfferClicked} list={list} />
        ) : (
          <UserList onClick={onUserClicked} list={list} />
        )}
      </Content>
    </Container>
  );
};
