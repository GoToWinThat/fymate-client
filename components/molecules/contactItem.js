import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Body, Left, ListItem, Icon } from 'native-base';

export default ContactItem = ({icon , description, color}) => {
    return (
        <View style={styles.view}>
            <Icon  name={icon} size={8} color={color}></Icon>
            <Text style={styles.text}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        paddingLeft: "8%",
    },
    text: {
        paddingLeft: "4%",
    }
})