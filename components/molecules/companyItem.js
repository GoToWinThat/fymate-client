import React from 'react'
import { View, Text } from 'react-native'

//Add data of company and item of company
export default CompanyItem = ({description}) => {
    return (
        <View>
            <Text>There is item company</Text>
            <Text>{description}</Text>
        </View>
    )
}
