import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

//Add contact item
export default Benefit = ({text}) => {
    return (
        <View style={styles.view}>
            <Icon name="checkmark-circle" style={{color: 'green'}} />
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})