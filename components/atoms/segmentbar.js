import { Button, Segment } from 'native-base'
import React, {useState} from 'react'
import { Text, StyleSheet } from 'react-native'

export default Segmentbar = ({onClickChange}) => {

    const [active, setActive] = useState("Company");

    const companyText = active === "Company" ? { color: 'white' } : {  color: '#007AFF' }
    const employeeText = active === "Employee" ? { color: 'white' } : {  color: '#007AFF' }

    return (
      <Segment style={styles.segment}>
        <Button transparent style={styles.buttons} first Employee
                active={active === "Employee"}
                onPress={() => {
                    onClickChange("Employee")
                    setActive("Employee")
                    }}>
          <Text style={employeeText}>Employee</Text>
        </Button>
        <Button transparent style={styles.buttons} last Company
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
  buttons: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
  },
  text: { fontWeight: 'bold', color: 'white' }
})