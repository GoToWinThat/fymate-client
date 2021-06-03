import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BenefitsList from '../molecules/benefitsList'
import {SCREEN_PADDING, ELEMENT_PADDING} from '../../styles/spacing'
import {FONT_SIZE_LABEL} from '../../styles/typography'

export default BenefitsDoubleList = ({benefits}) => {

    //Split array into 2 
    const half = Math.ceil(benefits.length / 2);    
    const firstHalf = benefits.splice(0, half)
    const secondHalf = benefits.splice(-half)
    
    return (
        <> 
        <Text style={styles.title}>Benefits</Text>
        <View style={styles.view}>
            <BenefitsList benefits={firstHalf}/>
            <BenefitsList benefits={secondHalf}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: ELEMENT_PADDING
    },
    title: {
        fontSize: FONT_SIZE_LABEL,
        fontWeight: 'bold',
        paddingLeft: SCREEN_PADDING,
    }
})