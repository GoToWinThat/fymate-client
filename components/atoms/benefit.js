import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

//Add contact item
export default Benefit = ({text, onClickDeleteBenefit}) => {
    return (
        <View style={styles.view}>
            <Icon name="checkmark-circle" style={{color: 'green'}} />
            <Text>{text}</Text>
            {onClickDeleteBenefit !== undefined ? 
            <Button iconLeft transparent  onPress={() => onClickDeleteBenefit(text)}> 
                <Icon name='trash'  style={{color: 'red'}}/>
            </Button> 
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})