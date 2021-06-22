import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OfferListBox from '../atoms/offerlistbox';
import { FONT_SIZE_LABEL } from '../../styles/typography'
import { ELEMENT_PADDING, SCREEN_PADDING } from '../../styles/spacing'

export default EducationList = ({ onListElementClicked, education }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Education</Text>
            {education?.map((e, idx) => {
                const onClick = onListElementClicked !== undefined ? () => {onListElementClicked(e,idx)} : undefined
                return <OfferListBox
                    key={idx}
                    title={e.university}
                    time={e.date}
                    location={e.place}
                    url='data:image/png;base64,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'
                    onClick={onClick}
                />
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
    }
})
