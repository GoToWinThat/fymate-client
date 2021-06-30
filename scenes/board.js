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
import { addOrRemoveFromArray } from "../backend/backend"
import RecentlyAdded from "../components/organisms/recentlyAdded";

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
    }
    else {
      queryRef = firebase.firestore()
        .collection("users")
       .where("type", "==", "Employee")
    }
    if (contract !== undefined)
      queryRef = queryRef.where("details.contract", "==", contract)
    if (jobtime !== undefined)
      queryRef = queryRef.where("details.jobtime", "==", jobtime)
    if (worktype !== undefined)
      queryRef = queryRef.where("details.worktype", "==", worktype)
    if (level !== undefined)
      queryRef = queryRef.where("details.level", "==", level)
    if (filter?.tags?.techstack?.length !== 0 && filter?.tags?.techstack !== undefined)
      queryRef = queryRef.where("tags", "array-contains-any", filter?.tags?.techstack)

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
    }).catch(e => console.log(e)) //get 20 posts
  }, [filter])

  //Fetches avatar urls
  const updateListWithUrls = (data) => {
    const storageRef = firebase.storage().ref();
    const promises = data.map((x) => {
      const uid = filter.searchType === "Employee" ? x.uid : x.ownerUid;
      return storageRef.child("avatars/" + uid).getDownloadURL();
    })

    Promise.allSettled(promises)
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
      await addOrRemoveFromArray("favouriteOffers", offer.uid, "users", uid)
    }

    navigation.navigate("Offert", {
      screen: "Offert",
      offer: offer,
      rightIconCallback: onClickFav
    });
  };

  const onClickUser = (user) => {
    const onClickFav = async (user) => {
      const uid = firebase.auth().currentUser.uid;
      await addOrRemoveFromArray("favouriteUsers", user.uid, "users", uid)
    }

    navigation.navigate("Account", {
      screen: "Account",
      type: "Employee",
      uid: user.uid,
      rightIconCallback: onClickFav
    });
  };

  const dayDifferenceFromNow = (date) => {
    var nowInSeconds = new Date().getTime() / 1000;
    let diff = Math.floor((nowInSeconds - date.seconds) / (60*60)) 
    console.log(diff)
    return diff
  }//18 070 420 Now, 1 624 532 467, 1 625 044 717
  var recentlyAddedList = list.filter(offer => dayDifferenceFromNow(offer.date) < 24)
  var olderList = list.filter(offer => dayDifferenceFromNow(offer.date) > 24)

  return (
    <Container>
      <Header searchBar rounded>
        <TopBar
          title="Fymate"
          onClickRightIcon={onClickFilters}
          rightIcon="filter"
        />
      </Header>
      <Content>
      {filter.searchType === "Company" ? <RecentlyAdded list={recentlyAddedList}/> : null}
      {filter.searchType === "Company" ? <OfferList onClick={onClickOffer} list={olderList} />
        : <UserList onClick={onClickUser} list={list} />}
      </Content>
    </Container>
  );
};
