import { Container, Content, Header } from "native-base";
import React, { useEffect, useState } from "react";
import TopBar from "../components/atoms/topbar";
import OfferList from "../components/molecules/offerlist";
import UserList from "../components/molecules/userlist";
import * as firebase from 'firebase'
import { chunk } from "../globals";
import { set } from "react-native-reanimated";
import { useFocusEffect } from '@react-navigation/native';
import { addOrRemoveFromArray } from "../backend/backend"
import { notFoundImageUrl } from "../globals";

const defaultFilterState = {
  tags: [],
  searchType: "Company",
  searchPhrase: ""
}

export default Favorite = ({ navigation }) => {
  const uid = firebase.auth().currentUser.uid;
  const [accountInfo, setAccountInfo] = useState({ type: "Employee" });
  const [userList, setUserList] = useState([]);
  const [offerList, setOfferList] = useState([]);
  const [filter, setFilter] = useState(defaultFilterState);

  const onReceivedNewFilter = (newFilter) => {
    filter.tags = newFilter.tags;
    filter.searchType = newFilter.searchType;
    setFilter({ ...filter }) //copy object to force rerender
  }

  //Fetches avatar urls
  const updateListWithUrls = (data, setListCallback) => {
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
        setListCallback(newList);
      })
  };


  useFocusEffect(
    React.useCallback(() => {
      firebase.firestore().collection("users")
        .doc(uid)
        .get()
        .then(snap => {
          const data = snap.data()
          setAccountInfo(data);
        });
    }, [])
  );

  //Fetches favourite offers and users
  useFocusEffect(
    React.useCallback(() => {
      const store = firebase.firestore();

      const PassOrDelete = (field, y) => {
        const d = y.data();
        const data = { ...d, uid: y.id }
        if (d !== undefined)
          return data;

        const idx = accountInfo[field].indexOf(y.id)
        const offers = accountInfo[field]
        offers.splice(idx, 1)
        const updateObject = {}
        updateObject[field] = offers
        store.collection("users").doc(uid).update(updateObject)
        return undefined;
      }


      if (accountInfo?.favouriteOffers !== undefined) {
        const promises = []
        for (const offer of accountInfo?.favouriteOffers) {
          promises.push(store.collection("offers").doc(offer).get())
        }
        Promise.all(promises) //Wait for all documents to fetch
          .then(x => x.map(y =>
            PassOrDelete("favouriteOffers", y)
          ))
          .then(x => {
            const arr = x.filter(x => x !== undefined)
            setOfferList(arr);
          });
      }

      if (accountInfo?.favouriteUsers !== undefined) {
        const promises = []
        for (const user of accountInfo.favouriteUsers) {
          promises.push(store.collection("users").doc(user).get())
        }
        Promise.all(promises) //Wait for all documents to fetch
          .then(x => x.map(y => 
            PassOrDelete("favouriteUsers", y)
          ))
          .then(x => {
            const arr = x.filter(x => x !== undefined)
            setUserList(arr);
            updateListWithUrls(arr, setUserList)
          });
      }
    }, [accountInfo, filter])
  );


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
        {filter.searchType === "Company" ?
          <OfferList onClick={onClickOffer} list={offerList} />
          : <UserList onClick={onClickUser} list={userList} />}
      </Content>
    </Container>
  );
};
