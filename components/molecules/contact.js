import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactItem from '../atoms/contactItem'
import { FONT_SIZE_LABEL } from '../../styles/typography'
import { ELEMENT_PADDING, SCREEN_PADDING } from '../../styles/spacing'

//Add contact item
export default Contact = ({ contacts, color }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
            {contacts?.phone !== undefined ? <ContactItem description={contacts?.phone} icon="call" color={color} /> : null}
            {contacts?.mail !== undefined ? <ContactItem description={contacts?.mail} icon="mail-sharp" color={color} /> : null}
            {contacts?.site !== undefined ? <ContactItem description={contacts?.site} icon="at-circle-outline" color={color} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: FONT_SIZE_LABEL,
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: SCREEN_PADDING,
        paddingVertical: ELEMENT_PADDING,
    }
})