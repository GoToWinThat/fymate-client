import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Body, Left, ListItem } from 'native-base';

export default ContactItem = ({icon , description, color}) => {
    return (
        <ListItem icon>
            <Left>
                <Ionicons name={icon} size={24} color={color}></Ionicons>

            </Left>
            <Body>
                <Text>{description}</Text>

            </Body>
        </ListItem>
    )
}
