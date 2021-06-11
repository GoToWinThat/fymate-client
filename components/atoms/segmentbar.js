import { Button, Segment } from 'native-base'
import React, {useState} from 'react'
import { Text, StyleSheet,Platform } from 'react-native'

export default Segmentbar = ({onClickChange}) => {

    const [active, setActive] = useState("Company");

    const color = Platform.OS === 'ios' ? '#007AFF' : 'white'
    const color2 = Platform.OS === 'ios' ? 'white' : 'black'
    const companyText = active === "Company" ? { color: color2 } : {  color: color }
    const employeeText = active === "Employee" ? { color: color2 } : {  color: color }
    const buttons = Platform.OS === 'ios' ? styles.btnsIOS : styles.btnsAndroid
    return (
      <Segment style={styles.segment}>
        <Button transparent style={buttons} first Employee
                active={active === "Employee"}
                onPress={() => {
                    onClickChange("Employee")
                    setActive("Employee")
                    }}>
          <Text style={employeeText}>Employee</Text>
        </Button>
        <Button transparent style={buttons} last Company
                active={active === "Company"}
                onPress={() => {
                  onClickChange("Company");    
                  setActive("Company");
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