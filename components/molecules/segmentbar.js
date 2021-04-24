import { Button, Header, Segment } from 'native-base'
import React, {useState} from 'react'
import { Text, StyleSheet } from 'react-native'

export default Segmentbar = ({onClickChangeActivePage}) => {

    const [activePage, setActivePage] = useState("Company");

    return (
      <Header>
        <Segment >
          <Button style={style.buttons} first Users
                  active={activePage === "Users"}
                  onPress={() => {
                      onClickChangeActivePage("Users")
                      setActivePage("Users")
                      }}>
            <Text>User</Text>
          </Button>
          <Button style={style.buttons} last Company
                  active={activePage === "Company"}
                  onPress={() => {
                    onClickChangeActivePage("Company");    
                    setActivePage("Company");
                    }}>
            <Text>Company</Text>
          </Button>
        </Segment>
      </Header>
    )
}

const style = StyleSheet.create({
  buttons: {
    width: '50%',
    justifyContent: 'center',
  }
})