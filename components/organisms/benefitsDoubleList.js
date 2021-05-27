import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BenefitsList from '../molecules/benefitsList'
import { Icon } from 'native-base'

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
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 12,
    }
})