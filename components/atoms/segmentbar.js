import { Button, Segment } from 'native-base'
import React, { useState } from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

export default Segmentbar = ({ initialState, onClickChange }) => {

  const [value, setValue] = useState(initialState !== undefined ? initialState : "Company");

  const color = Platform.OS === 'ios' ? '#007AFF' : 'white'
  const color2 = Platform.OS === 'ios' ? 'white' : 'black'
  const companyText = value === "Company" ? { color: color2 } : { color: color }
  const employeeText = value === "Employee" ? { color: color2 } : { color: color }
  const buttons = Platform.OS === 'ios' ? styles.btnsIOS : styles.btnsAndroid
  return (
    <Segment style={styles.segment}>
      <Button transparent style={buttons} first Employee
        active={value === "Employee"}
        onPress={() => {
          onClickChange("Employee")
          setValue("Employee")
        }}>
        <Text style={employeeText}>Employee</Text>
      </Button>
      <Button transparent style={buttons} last Company
        active={value === "Company"}
        onPress={() => {
          onClickChange("Company");
          setValue("Company");
        }}>
        <Text style={companyText}>Company</Text>
      </Button>
    </Segment>
  )
}

const styles = StyleSheet.create({
  btnsAndroid: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black'
  },
  btnsIOS: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
  }
})