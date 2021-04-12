import { Button, Header, Segment } from 'native-base'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default Segmentbar = () => {
    return (
      <Header>
        <Segment >
          <Button style={style.buttons} first>
            <Text>User</Text>
          </Button>
          <Button style={style.buttons} last active>
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