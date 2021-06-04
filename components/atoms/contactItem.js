import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base';
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

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
        paddingLeft: SCREEN_PADDING,
    },
    text: {
        paddingTop: 3,
        paddingLeft: "4%",
    }
})