import { Button, Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Btn from '../components/atoms/btn'
import Offerlist from '../components/molecules/offerlist'
import { useEffect } from 'react'
import * as firebase from 'firebase'
import { useState } from 'react'


export default MyOfferts = ({ navigation }) => {

  const [offerList, setOfferList] = useState([])

  useEffect(() => {
    const uid = firebase.auth().currentUser.uid
    const offersRef = firebase.firestore().collection("offers")
    offersRef.where("ownerUid", "==", uid).get().then(snap => {
      const arr = snap.docs.map(x => x.data())
      setOfferList(arr)
    })
  }, [])


  const onClickGoBack = () => {
    navigation.goBack();
  }


  return (
    <Container>
      <Header>
        <TopBar title="My Offerts" onClickGoBack={onClickGoBack} />
      </Header>
      <Content>
        <Offerlist list={offerList} />
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