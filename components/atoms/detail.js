import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

//Add contact item
export default Detail = ({text="None", icon}) => {
    return (
        <View style={styles.view}>
            <Icon name={icon} style={{color: 'black'}} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        paddingLeft: 10,
    }
})