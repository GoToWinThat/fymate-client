import { Container, Header, Left, Right, Icon, Content, List, ListItem, Text, Switch, View } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Avatar from '../components/atoms/avatar'
import TitleInfo from '../components/atoms/titleinfo'
import * as firebase from 'firebase';
import { useState, useEffect } from 'react';

//this screen is used for _current user_ only
export default Profile = ({ navigation }) => {

    const currentProfileDocumentRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
    const [userOrCompany, setUserOrCompany] = useState(
        {
            type: 'Company',
            name: '',
            surname: '',
            email: '',
            phone: '',
            location: '',
            avatarUrl: "",
            tags: [],
        }
    );

    const onClickGoBack = () => {
        navigation.goBack();
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
    //TODO: cache
    useEffect(() => {
        const unsub = currentProfileDocumentRef.onSnapshot(snapshot => {
            setUserOrCompany(snapshot.data());
        });
        return () => unsub(); //unsubscribe from realtime listener
    }, []);


    const companyContent = userOrCompany.type === "Company" ?
        <>
            <View style={styles.view}>
                <Avatar url={userOrCompany.avatarUrl} />
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

                <ListItem onPress={() => navigation.navigate("Account")}>
                    <Left><Text>See your profile</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("General", { doc: currentProfileDocumentRef, info: userOrCompany.about })}>
                    <Left><Text>General</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("CompanyDescription")}>
                    <Left><Text>Company Description</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Filters")}>
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

                <ListItem onPress={() => navigation.navigate("EditOffert")}>
                    <Left><Text>Add Offer</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>ACCOUNT</Text>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("ChangePassword")}>
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

                <ListItem>
                    <Left><Text>Dark Mode</Text></Left>
                    <Right><Switch value={false} /></Right>
                </ListItem>
            </List>
        </>
        : null


    const userContent = userOrCompany.type === 'Employee' ?
        <>
            <View style={styles.view}>
                <Avatar url={userOrCompany.avatarUrl} />
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

                <ListItem onPress={() => navigation.navigate("Account", { uid: firebase.auth().currentUser.uid })}>
                    <Left><Text>See your profile</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("General", {
                    doc: currentProfileDocumentRef,
                    info: {
                        about: userOrCompany.about,
                        company: userOrCompany.company,
                        details: userOrCompany.details
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

                <ListItem onPress={() => navigation.navigate("ChangePassword")}>
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

                <ListItem>
                    <Left><Text>Dark Mode</Text></Left>
                    <Right><Switch value={false} /></Right>
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