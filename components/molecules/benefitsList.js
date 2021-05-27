import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Benefit from '../atoms/benefit'

//In props add array of benefits ["" , "" , ""]
export default BenefitsList = ({benefits}) => {
    return (
        <View>
           {benefits.map((e) =>{
               return (
                   <Benefit text={e}/>
               )
           })}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})