import React, {useState} from 'react'
import BoardTab from './boardTab'
import FavoriteTab from './favoriteTab'
import ProfileTab from './profileTab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default MainTab = ({ navigation }) => {

    const Tab = createBottomTabNavigator();
    const [activeTab, setActiveTab] = useState("search");

    return (
      <>
        <Tab.Navigator >
          <Tab.Screen name="BoardTab" component={BoardTab} 
            options={navigation => ({
              tabBarVisible: false
            })}
          />
          <Tab.Screen name="FavoriteTab" component={FavoriteTab} 
            options={navigation => ({
              tabBarVisible: false
            })}
          />
          <Tab.Screen name="ProfileTab" component={ProfileTab} 
            options={navigation => ({
              tabBarVisible: false
            })}
          />
        </Tab.Navigator>
        <Footer>
          <FooterTab>
            <Button vertical active={activeTab == "search" ? true : false }
              onPress={() => {setActiveTab("search"); navigation.navigate("BoardTab")}}
            >
              <Icon name="search" />
              <Text>Search</Text>
            </Button>
            <Button vertica active={activeTab == "favorite" ? true : false }
              onPress={() => {setActiveTab("favorite"); navigation.navigate("FavoriteTab")}}
            >
              <Icon name="list" />
              <Text>My Offerts</Text>
            </Button>
            <Button vertical active={activeTab == "profile" ? true : false }
              onPress={() => {setActiveTab("profile"); navigation.navigate("ProfileTab")}}
            >
              <Icon name="person"  />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </>
    )
}
