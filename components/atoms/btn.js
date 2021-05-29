import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

export default Btn = ({text, icon, onPress}) => {
    return (
        <Button style={styles.btn} onPress={onPress !== undefined ? () => onPress() : null }>
            {icon !== undefined ? <Icon style={styles.icon} name={icon} size={12} color="white" ></Icon> : null}
            <Text style={styles.text}>{text}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        borderRadius: 12,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
    icon: {
    }
})