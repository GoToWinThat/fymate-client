import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactItem from '../molecules/contactItem';

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
        paddingLeft: 20,
        fontSize: 22,
        fontWeight: 'bold',
    },
})