import React from 'react'
import { Body, Button, Left, Right, Header, Title, Content, Text } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Searchbar from '../molecules/searchbar';
import Segment from '../molecules/segmentbar';

export default Boardheader = ({onClickGoToAccount}) => {
    return (
        <>
        <Header hasSegment>
            <Left>
                <Button onPress={() => onClickGoToAccount()}>
                    <FontAwesome5 name="user-alt" size={24} color="black" />
                </Button>
            </Left>
            <Body>
                <Title>Fymate</Title>
            </Body>
            <Right>
                <Button>
                <Ionicons name="stats-chart-sharp" size={24} color="black" />
                </Button>
                <Button>
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </Button>
            </Right>
      </Header>
      <Searchbar/>
      <Segmentbar/>
      </>
    )
}
