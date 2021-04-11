import { Container, Content, Spinner } from 'native-base'
import React, {useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'
import * as Location from 'expo-location';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default Loading = ({navigation}) => {

    const [fontIsReady , setFontIsReady] = useState(false);

    useEffect(() => {
        Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setFontIsReady(true);
      },[])

      if(fontIsReady){
        navigation.reset({
            index: 0,
            routes: [{
                name: 'Onboarding',
            },],
          });
      }

      return (
        <Container style={{backgroundColor: 'black'}}>
            <Content contentContainerStyle={styles.contentView} >
                <Spinner color="red"></Spinner>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    LoadingScreen: {
        backgroundColor: 'black',
    },
    contentView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})
