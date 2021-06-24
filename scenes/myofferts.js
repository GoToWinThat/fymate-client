import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Btn from '../components/atoms/btn'
import Offerlist from '../components/molecules/offerlist'
import { useEffect } from 'react'
import * as firebase from 'firebase'
import { useState } from 'react'


export default MyOfferts = ({ navigation, route }) => {
  const url = route.params.url;
  const offerColl = firebase.firestore().collection("offers");
  const [offerList, setOfferList] = useState([])

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid
    offerColl.where("ownerUid", "==", uid).get().then(snap => {
      const arr = snap.docs.map((x) => {
        let data = x.data();
        return { docId: x.id, url: url, ...data }
      })
      console.log(arr)
      setOfferList(arr)
    })
  }, [])


  const onClickGoBack = () => {
    navigation.goBack();
  }

  const updateCallback = (result) => {
    const newElement = result;
    const docId = result.docId
    delete newElement.docId; //get rid of redudant field
    offerColl.doc(docId).update(result)
  }


  const deleteCallback = (docId) => {
    offerColl.doc(docId).delete()
  }

  const onClickListElement = (offer) => {
    navigation.navigate("AddOffer", { defaults: offer, submitCallback: updateCallback, deleteCallback: deleteCallback })
  }

console.log(offerList)
  return (
    <Container>
      <Header>
        <TopBar title="My Offerts" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <Offerlist list={offerList} onClick={onClickListElement} />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  btnView: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  }
})