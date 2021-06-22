import { Container, Header, Left, Right, Icon, Content, List, ListItem, Text, Switch, View, Toast, Thumbnail } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Avatar from '../components/atoms/avatar'
import TitleInfo from '../components/atoms/titleinfo'
import * as firebase from 'firebase';
import { useState, useEffect } from 'react';
import { notFoundImageUrl } from '../globals'

//this screen is used for _current user_ only
export default Profile = ({ navigation }) => {

    const uid = firebase.auth().currentUser.uid;
    const currentProfileDocumentRef = firebase.firestore().collection('users').doc(uid)
    const [avatarUrl, setAvatarUrl] = useState(notFoundImageUrl);


    const [userOrCompany, setUserOrCompany] = useState(
        {
            type: 'Company',
            name: '',
            surname: '',
            email: '',
            phone: '',
            location: '',
            tags: [],
        }
    );

    const onSendVerificationClick = (resetEmail) => {
        firebase.auth().sendPasswordResetEmail(resetEmail);
    }

    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onImageChosen = async (uri) => {
        const response = await fetch(uri)
        const data = await response.blob();
        const ref = firebase.storage().ref().child("avatars/" + uid);
        ref.put(data);
    }

    const onClickLogOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login", {
                screen: "Login",
            });
        })
            .catch(() => {
                //TODO: inform user about failure
                console.log("error while signing out");
            });

    }

    //Fetch current user info
    useEffect(() => {
        const unsub = currentProfileDocumentRef.onSnapshot(snapshot => {
            setUserOrCompany(snapshot.data());
        });
        return () => unsub(); //unsubscribe from realtime listener
    }, []);

    useEffect(() => {
        firebase.storage().ref()
            .child("avatars/" + uid)
            .getDownloadURL()
            .then(url => { setAvatarUrl(url); })
            .catch(e => console.log(e)); //TODO: cancel on unmount
    }, []);


    const companyContent = userOrCompany.type === "Company" ?
        <>
            <View style={styles.view}>
                <Avatar url={avatarUrl} onImageChosen={onImageChosen} />
                <TitleInfo
                    title={userOrCompany.name}
                    email={userOrCompany.email}
                    phone={userOrCompany.phone}
                    location={userOrCompany.location}
                />
            </View>

            <List>
                <ListItem itemDivider>
                    <Text>COMPANY INFO</Text>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Account", { uid: uid, type: "Company",prev: "profile" })}>
                    <Left><Text>See your profile</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("General", { doc: currentProfileDocumentRef, info: userOrCompany.about })}>
                    <Left><Text>General</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("CompanyDescription", { doc: currentProfileDocumentRef, info: userOrCompany.companyDescription })}>
                    <Left><Text>Company Description</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("ProfileTags", { doc: currentProfileDocumentRef, info: userOrCompany.tags })}>
                    <Left><Text>Tags</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>OFFERS</Text>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("MyOfferts")}>
                    <Left><Text>Your Offers</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("AddOffer")}>
                    <Left><Text>Add Offer</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>ACCOUNT</Text>
                </ListItem>

                <ListItem onPress={() => {
                    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
                    //.then(() => Toast.show({ text: "Password change email sent!" })) //TODO: figure this out
                    //.catch(e => Toast.show({ text: "Something went wrong when sending password reset email" }))
                }}>
                    <Left><Text>Change Password</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem >
                    <Left><Text>Delete Account</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={onClickLogOut}>
                    <Left><Text>Log out</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
            </List>
        </>
        : null


    const userContent = userOrCompany.type === 'Employee' ?
        <>
            <View style={styles.view}>
                <Avatar url={avatarUrl} onImageChosen={onImageChosen} />
                <TitleInfo
                    title={`${userOrCompany.name} ${userOrCompany.surname}`}
                    email={userOrCompany.email}
                    phone={userOrCompany.phone}
                    location={userOrCompany.location}
                />
            </View>

            <List>
                <ListItem itemDivider>
                    <Text>PERSONAL INFO</Text>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Account", { uid: uid, type: "Employee",prev: "profile" })}>
                    <Left><Text>See your profile</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("General", {
                    doc: currentProfileDocumentRef,
                    info: {
                        about: userOrCompany.about,
                        company: userOrCompany.company,
                        details: userOrCompany.details,
                        solary: userOrCompany.solary,
                        position: userOrCompany.position
                    }
                })}>
                    <Left><Text>General</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Experience", { doc: currentProfileDocumentRef, info: userOrCompany.experience })}>
                    <Left><Text>Experience</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Projects", { doc: currentProfileDocumentRef, info: userOrCompany.projects })}>
                    <Left><Text>Projects</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Education", { doc: currentProfileDocumentRef, info: userOrCompany.education })}>
                    <Left><Text>Education</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("ProfileTags", { doc: currentProfileDocumentRef, info: userOrCompany.tags })}>
                    <Left><Text>Tags</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>ACCOUNT</Text>
                </ListItem>

                <ListItem onPress={() => {
                    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
                    //.then(() => Toast.show({ text: "Password change email sent!" })) //TODO: figure this out
                    //.catch(e => Toast.show({ text: "Something went wrong when sending password reset email" }))
                }}>
                    <Left><Text>Change Password</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem >
                    <Left><Text>Delete Account</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={onClickLogOut}>
                    <Left><Text>Log out</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>
            </List>
        </>
        : null

    return (
        <Container>
            <Header>
                <TopBar title="Fymate" />
            </Header>
            <Content>
                {userOrCompany.type === 'Company' ? companyContent : userContent}
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
})