import React from "react";
import { Container, Header, Content } from "native-base";
import TopBar from "../components/atoms/topbar";
import Searchbar from "../components/atoms/searchbar";
import OfferList from "../components/molecules/offerlist";
import UserList from "../components/molecules/userlist";
import { useState } from "react";
import { useEffect } from "react";
import * as firebase from 'firebase';
import { notFoundImageUrl } from "../globals"
import 'allsettled-polyfill';


const defaultFilterState = {
  tags: [],
  searchType: "Company",
  searchPhrase: ""
}

export default Board = ({ navigation }) => {

  const [list, setList] = useState([])
  const [filter, setFilter] = useState(defaultFilterState);

  const onReceivedNewFilter = (newFilter) => {
    filter.tags = newFilter.tags;
    filter.searchType = newFilter.searchType;
    setFilter({ ...filter }) //copy object to force rerender
  }

  const onReceivedNewSearchPhrase = (val) => {
    filter.searchPhrase = val;
    setFilter({ ...filter }) //copy object to force rerender
  }

  useEffect(() => {
    let queryRef = null;
    let contract = undefined;
    let jobtime = undefined;
    let worktype = undefined;
    let level = undefined;

    if (filter?.tags?.contract !== undefined)
      contract = filter?.tags?.contract[0]
    if (filter?.tags?.jobtime !== undefined)
      jobtime = filter?.tags?.jobtime[0]
    if (filter?.tags?.worktype !== undefined)
      worktype = filter?.tags?.worktype[0]
    if (filter?.tags?.level !== undefined)
      level = filter?.tags?.level[0]

    if (filter.searchType === "Company") {
      queryRef = firebase.firestore()
        .collection("offers")
      if (filter.tags.length !== 0)
        queryRef = queryRef.where("tags", "array-contains-any", filter.tags) //TODO: this only supports up to 10 elements

    }
    else {


      queryRef = firebase.firestore()
        .collection("users")
        .where("type", "==", "Employee")
      if (contract !== undefined)
        queryRef = queryRef.where("details.contract", "==", contract)
      if (jobtime !== undefined)
        queryRef = queryRef.where("details.jobtime", "==", jobtime)
      if (worktype !== undefined)
        queryRef = queryRef.where("details.worktype", "==", worktype)
      if (level !== undefined)
        queryRef = queryRef.where("details.level", "==", level)
      if (filter?.tags?.techstack?.length !== 0 && filter?.tags?.techstack !== undefined)
        queryRef = queryRef.where("tags", "array-contains", filter?.tags?.techstack || [])
    }
    queryRef.limit(20).get().then(snapshot => {
      let data = snapshot.docs.map(x => {
        let d = x.data();
        return {
          uid: x.id,
          ...d
        }
      })
      setList(data);
      updateListWithUrls(data);
    }) //get 20 posts
  }, [filter])

  //Fetches avatar urls
  const updateListWithUrls = (data) => {
    const storageRef = firebase.storage().ref();

    console.log(data)

    const promises = data.map((x) => {
      const uid = filter.searchType === "Employee" ? x.uid : x.ownerUid;
      return storageRef.child("avatars/" + uid).getDownloadURL();
    })

    const urls = Promise.allSettled(promises)
      .then(x => {
        const urls = x.map(y => {
          if (y.status === "rejected")
            return notFoundImageUrl; //guard rejection
          return y.value;
        })
        const newList = data.map((x, idx) => {
          return { ...x, url: urls[idx] };
        })
        setList(newList);
      })
  };

  const onClickFilters = () => {
    navigation.navigate("Filters", {
      screen: "Filters",
      onGoBackCallback: onReceivedNewFilter,
      initialFilterState: filter
    });
  };

  const onClickOffer = (offer) => {
    const onClickFav = async (offer) => {
      const uid = firebase.auth().currentUser.uid;
      const userDocRef = firebase.firestore().collection("users").doc(uid);
      const userDoc = await userDocRef.get();
      let favArr = userDoc.get("favouriteOffers");
      if (favArr === undefined)
        favArr = [];
      if (favArr.includes(offer.uid)) {
        const idx = favArr.indexOf(offer.uid);
        favArr.splice(idx, 1)
      }
      else {
        favArr.push(offer.uid);
      }
      userDocRef.update({ favouriteOffers: favArr });
    }

    navigation.navigate("Offert", {
      screen: "Offert",
      offer: offer,
      rightIconCallback: onClickFav
    });
  };

  const onClickUser = (user) => {
    const onClickFav = async (offer) => { //TODO: move out
      const uid = firebase.auth().currentUser.uid;
      const userDocRef = firebase.firestore().collection("users").doc(uid);
      const userDoc = await userDocRef.get();
      let favArr = userDoc.get("favouriteUsers");
      if (favArr === undefined)
        favArr = [];
      if (favArr.includes(offer.uid)) {
        const idx = favArr.indexOf(offer.uid);
        favArr.splice(idx, 1)
      }
      else {
        favArr.push(offer.uid);
      }
      userDocRef.update({ favouriteUsers: favArr });
    }


    navigation.navigate("Account", {
      screen: "Account",
      type: "Employee",
      uid: user.uid,
      rightIconCallback: onClickFav
    });
  };

  return (
    <Container>
      <Header searchBar rounded>
        <TopBar
          title="Fymate"
          onClickRightIcon={onClickFilters}
          rightIcon="filter"
        />
      </Header>
      <Searchbar />
      <Content>
        {filter.searchType === "Company" ? <OfferList onClick={onClickOffer} list={list} />
          : <UserList onClick={onClickUser} list={list} />}
      </Content>
    </Container>
  );
};
