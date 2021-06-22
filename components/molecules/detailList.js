import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Detail from '../atoms/detail'
import {FONT_SIZE_LABEL} from '../../styles/typography'
import {ELEMENT_PADDING,SCREEN_PADDING} from '../../styles/spacing'

//Example Json :
// const details = {
//     contract: "Umowa - B2B",
//     position: "Junior",
//     worktype: "Remote",
//     starttime: "06.07.2021.r",
//     jobtime: "1/4 etatu"
// }
export default DetailsList = ({details}) => {
    //contract , position, jobTime, worktype, starttime
    return (
        <>
        <Text style={styles.title}>Details</Text>
        <View style={styles.container}>
            <View>
                <Detail icon="document-text" text={details?.contract}/>
                <Detail icon="laptop-outline" text={details?.worktype}/>
                <Detail icon="calendar-outline" text={details?.starttime}/>
            </View>
            <View>
                <Detail icon="briefcase" text={details?.position}/>
                <Detail icon="time-outline" text={details?.jobtime}/>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: ELEMENT_PADDING,
    },
    title: {
        fontSize: FONT_SIZE_LABEL,
        fontWeight: 'bold',
        paddingHorizontal: SCREEN_PADDING
    }
})