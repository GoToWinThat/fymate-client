import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TagList from '../molecules/tagList'
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

//Add project item
export default ProjectList = ({projects}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects</Text>
            {projects.map((e) => {
                return(
                    <View key={e.id} style={styles.view}>
                        <TagList title={e.title} tags={e.taglist}/>
                        <Text style={styles.description}>{e.description}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: ELEMENT_PADDING
    },
    title: {
        fontSize: FONT_SIZE_LABEL,
        fontWeight: 'bold',
        paddingLeft: SCREEN_PADDING,
    },
    view: {
        paddingVertical: ELEMENT_PADDING
    },
    description: {
        paddingHorizontal: SCREEN_PADDING,
    }
})