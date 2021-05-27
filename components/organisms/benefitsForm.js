import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Item, Input } from 'native-base'
import BenefitsList from '../molecules/benefitsList'

//In props add array of benefits ["" , "" , ""] , and in onClickAddBenefit return String 
export default BenefitsForm = ({benefits , onClickAddBenefit}) => {

    const [benefit, setBenefit] = useState("")

    return (
        <View style={styles.view}>
            <Item rounded>
                <Input onChangeText={setBenefit} onSubmitEditing={() => onClickAddBenefit(benefit)} placeholder="Feature..."/>
            </Item>
            <View style={styles.viewList}>
                <BenefitsList benefits={benefits}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        margin: "6%",
        alignItems: 'center'
    },
    viewList: {
        width: '86%',
    }
})