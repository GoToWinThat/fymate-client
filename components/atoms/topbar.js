import { Body, Button, Header, Icon, Left, Right, Title, Text } from 'native-base'
import React from 'react'
import { Platform } from 'react-native'

export default TopBar = ({ onClickGoBack, title, onClickRightIcon, rightIcon }) => {
    return (
        <>
            {onClickGoBack !== undefined ?  
            <Left> 
                <Button onPress={() => onClickGoBack()} transparent>
                    <Icon name='arrow-back' />
                    {Platform.OS === 'ios' ? <Text>Back</Text> : null}
                </Button>
            </Left>: <Left/>}
            <Body >
                <Title>{title}</Title>
            </Body>
            {onClickRightIcon !== undefined ? <Right>
                <Button transparent onPress={() => onClickRightIcon()}>
                    <Icon name={rightIcon}/>
                </Button>
            </Right> : <Right/>}
        </>
    )
}
