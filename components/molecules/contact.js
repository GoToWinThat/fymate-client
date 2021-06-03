import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactItem from '../atoms/contactItem'
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

//Add contact item
export default Contact = ({contacts, color}) => {
    return (
        <View>
            <Text style={styles.title}>Contact</Text>
            {contacts.map((e, key) => {
                return <ContactItem key={key} description={e.description} icon={e.icon} color={color}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: SCREEN_PADDING,
        paddingVertical: ELEMENT_PADDING ,
        fontSize: FONT_SIZE_LABEL,
        fontWeight: 'bold',
    },
})