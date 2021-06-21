import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TagList from '../molecules/tagList'
import { FONT_SIZE_LABEL } from '../../styles/typography'
import { ELEMENT_PADDING, SCREEN_PADDING } from '../../styles/spacing'
import { TouchableOpacity } from 'react-native-gesture-handler'

//Add project item
export default ProjectList = ({ onListElementClicked, projects }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects</Text>
            {projects.map((e, idx) => {
                return (
                    <TouchableOpacity onPress={() => onListElementClicked(e, idx)} activeOpacity={0.5}>
                        <View key={e.id} style={styles.view}>
                            <TagList title={e.title} tags={e.tags} />
                            <Text style={styles.description}>{e.description}</Text>
                        </View>
                    </TouchableOpacity>
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