import { Button,Header, Container, Content, Icon, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../components/atoms/topbar'
import Btn from '../components/atoms/btn'

export default MyOfferts = ({ navigation }) => {
    
    const onClickGoBack = () => {
        navigation.goBack();
    }

    const onClickAdd = () => {
        console.log("Add new offert");
    }

    return (
        <Container>
            <Header>
                <TopBar title="My Offerts" onClickGoBack={onClickGoBack}/>
            </Header>
            <Content>
                <CompanyList/>
                <View style={styles.btnView}>
                    <Btn onPress={onClickAdd} icon={"add"} text={"Add New"}/>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    btnView: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    }
})