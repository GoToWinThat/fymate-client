import React from 'react';
import {StyleSheet} from 'react-native';
import { View, Text } from 'react-native';
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

export default HowToApply = ({desciption}) => {
    return (
        <View style={styles.aboutView}>
            <Text style={styles.title}>How To Apply</Text>
            <Text style={styles.desciptionText} >{desciption}</Text>
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
    }
})