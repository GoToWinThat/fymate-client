import { Container, Header,Left,Right,Icon, Content, List, ListItem, Text, Switch } from 'native-base';
import React from 'react'
import TopBar from '../components/atoms/topbar'

export default Profile = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    //TODO: Change list for Company / Account type 

    return (
        <Container>
            <Header>
                <TopBar title="Fymate"/>
            </Header>
            <Content>
                <Text>TODO: Avatar and others info</Text>

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

                    <ListItem onPress={() => navigation.navigate("Filters")}>
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
            </Content>
        </Container>
    )
}
