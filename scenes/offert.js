import { Button, Container, Content, Icon, Text } from 'native-base'
import React from 'react'

export default Offert = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Content>
                <Text>There is content of offert</Text>
            </Content>
        </Container>
    )
}
