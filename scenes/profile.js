import { Container, Header,Left,Right,Icon, Content, List, ListItem, Text, Switch, View } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Avatar from '../components/atoms/avatar'
import TitleInfo from '../components/atoms/titleinfo'

export default Profile = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    //Employee , Company
    const userOrCompany = {
        type: 'Company',
        title: 'Billennium',
        name: 'Dariusz',
        surname: 'Momot',
        email: 'dariusz.momot@gmail.com',
        phone: '+48 517 952 221',
        location: 'Gliwice',
        avatarUrl: "https://cont4.naekranie.pl/media%2Fcache%2Farticle-cover%2F2016%2F07%2Fneytiri-avatar-5824.jpg"
    }

    
    const companyContent = userOrCompany.type === "Company" ? 
        <>
            <View style={styles.view}>
                <Avatar url={userOrCompany.avatarUrl}/>
                <TitleInfo
                    title={userOrCompany.title}
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

                <ListItem onPress={() => navigation.navigate("General")}>
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
                <Avatar url={userOrCompany.avatarUrl}/>
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

                <ListItem onPress={() => navigation.navigate("Account")}>
                    <Left><Text>See your profile</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("General")}>
                    <Left><Text>General</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Experience")}>
                    <Left><Text>Experience</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Projects")}>
                    <Left><Text>Projects</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Education")}>
                    <Left><Text>Education</Text></Left>
                    <Right><Icon name="arrow-forward" /></Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("ProfileTags")}>
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
                <TopBar title="Fymate"/>
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