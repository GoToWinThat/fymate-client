import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TagList from '../molecules/tagList'

//Add project item
export default Projects = ({projects}) => {
    return (
        <View>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    view: {
        padding:20,
    },
    description: {
        textAlign: 'center',
    }
})