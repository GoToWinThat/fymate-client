import { Body, Button, Header, Icon, Left, Right, Title, Text } from 'native-base'
import React from 'react'
import {Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Offertheader = ({ onClickGoBack }) => {
    return (
        <Header>
            <Left> 
                <Button onPress={() => onClickGoBack()} transparent>
                    <Icon name='arrow-back' />
                    {Platform.OS === 'ios' ? <Text>Back</Text> : null}
                </Button>
            </Left>
            <Body>
                <Title>Offert</Title>
            </Body>
            <Right>
                <Button>
                    <Ionicons name="md-paper-plane-sharp" size={24} color="black" />
                </Button>
            </Right>
        </Header>
    )
}
