import React from 'react';
import {StyleSheet} from 'react-native';
import { View, Text } from 'react-native';
import { Thumbnail } from 'native-base'
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

export default About = ({desciption, title, img, desciption2}) => {
    return (
        <View style={styles.aboutView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desciptionText} >{desciption}</Text>
            {img !== undefined ? <Thumbnail square style={styles.thumbnail} source={{uri: img}} /> : null}
            {desciption !== undefined ? <Text style={styles.desciptionText}>{desciption2}</Text> : null}

        </View>
    )
}

const styles = StyleSheet.create({
    aboutView: {
        paddingVertical: ELEMENT_PADDING,
        paddingHorizontal: SCREEN_PADDING
    },
    title: {
        fontSize: FONT_SIZE_LABEL,
        fontWeight: 'bold',
    },
    desciptionText: {
        // fontSize: 16,
    },
    thumbnail: {
        width: 300,
        height: 300,
        alignSelf: "center",
        marginVertical: 20,
      },
})