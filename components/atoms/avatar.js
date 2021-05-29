import React, { useState , useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import { Icon, Thumbnail } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

//Add image to Avatar. 
//if u wanna rise state up , pass onClick in props

//Example use:
// <Avatar url="https://cont4.naekranie.pl/media%2Fcache%2Farticle-cover%2F2016%2F07%2Fneytiri-avatar-5824.jpg"/>
export default Avatar = ({url}) => {

    //url is started image -> image from firebase ...


    const [image, setImage] = useState(url)

    useEffect( async () => {
        if(Platform.OS !== 'web'){
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if( status !== 'granted'){
                alert("Permision denied!")
            }
        }
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality:1
        })
        console.log(result)
        if(!result.cancelled){
            setImage(result.uri)
            onClickHandle(result.uri)
        }
    }

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={PickImage}>
                <ImageBackground source={{uri: image}} 
                    style={{width: 120, height: 120}} imageStyle={{borderRadius: 100}}>
                        <View style={styles.icon}>
                            <Icon name="add-circle-sharp" style={{color: 'blue'}} />
                        </View>
                </ImageBackground>
            </TouchableOpacity>
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