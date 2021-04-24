import React from 'react';
import {StyleSheet} from 'react-native';
import { View, Text } from 'react-native';

export default About = ({desciption}) => {
    return (
        <View style={styles.aboutView}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.desciptionText} >{desciption}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutView: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    desciptionText: {
        fontSize: 16,
    }
})