import { Button, Container, Content, Icon, Text } from 'native-base'
import React from 'react'
import Offertheader from '../components/atoms/offertheader'

export default Offert = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Offertheader onClickGoBack={onClickGoBack}/>
            <Content>
                <Text>There is content of offert</Text>
            </Content>
        </Container>
    )
}
