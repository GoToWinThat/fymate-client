import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OfferListBox from '../atoms/offerlistbox';

//Add company item
export default Experience = ({experience}) => {
    return (
        <View>
            <Text style={styles.title}>Experience</Text>
            {experience.map((e) => {
                return (
                    <View>
                        <OfferListBox
                            title={e.title}
                            company={e.company}
                            url={e.url}
                            time={e.time}
                        />
                        <Text style={styles.description}>{e.description}</Text>
                    </View>
                )
            })}
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    description: {
        textAlign: 'center',
        padding: 20,
    }
})