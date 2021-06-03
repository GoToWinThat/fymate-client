import { Button, Segment } from 'native-base'
import React, {useState} from 'react'
import { Text, StyleSheet } from 'react-native'

export default Segmentbar = ({onClickChange}) => {

    const [active, setActive] = useState("Company");

    return (
      <Segment style={styles.segment}>
        <Button style={styles.buttons} first Employee
                active={active === "Employee"}
                onPress={() => {
                    onClickChange("Employee")
                    setActive("Employee")
                    }}>
          <Text>Employee</Text>
        </Button>
        <Button style={styles.buttons} last Company
                active={active === "Company"}
                onPress={() => {
                  onClickChange("Company");    
                  setActive("Company");
                  }}>
          <Text>Company</Text>
        </Button>
      </Segment>
    )
}

const styles = StyleSheet.create({
  buttons: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black', 
  },
})