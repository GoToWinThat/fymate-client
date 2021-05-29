import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Icon, Thumbnail } from 'native-base'

//Add contact item
export default Avatar = ({onClickHandle, url}) => {
    return (
        <View style={styles.view}>
            <ImageBackground source={{uri: url}} 
                style={{width: 100, height: 100}} imageStyle={{borderRadius: 100}}>
                    <View style={styles.icon}>
                        <Icon name="add-circle-sharp" style={{color: 'blue'}} />
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
})