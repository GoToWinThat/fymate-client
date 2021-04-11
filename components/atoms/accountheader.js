import { Body, Button, Header, Icon, Left, Right, Title, Text } from 'native-base'
import React from 'react'
import {Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Accountheader = ({ onClickGoBack }) => {
    return (
        <Header>
            <Left> 
                <Button onPress={() => onClickGoBack()} transparent>
                    <Icon name='arrow-back' />
                    {Platform.OS === 'ios' ? <Text>Back</Text> : null}
                </Button>
            </Left>
            <Body>
                <Title>Account</Title>
            </Body>
            <Right>
                <Button>
                    <Ionicons name="heart-sharp" size={24} color="black" />
                </Button>
                <Button>
                    <MaterialCommunityIcons name="clipboard-text" size={24} color="black" />
                </Button>
            </Right>
        </Header>
    )
}
