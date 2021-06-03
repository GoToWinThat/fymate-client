import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OfferListBox from '../atoms/offerlistbox';
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

//Add company item
export default ExperienceList = ({experience}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Experience</Text>
            {experience.map((e, index) => {
                return (
                    <View>
                        <OfferListBox
                            key={index}
                            title={e.title}
                            company={e.company}
                            url={e.url}
                            time={e.time}
                        />
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
    description: {
        padding: 10,
        paddingLeft: SCREEN_PADDING,
    }
})