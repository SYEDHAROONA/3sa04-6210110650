import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View style = {styles.backText}>
            <Text style={styles.mainText}>
                {props.main}
            </Text>
            <Text style={styles.mainText}>
                {props.description}
            </Text>
            <Text style={styles.mainText}>   
                {props.temp}
                <Text>°C</Text>
            </Text>
        
        </View>
    );
   }   
const styles = StyleSheet.create({
    backText: {
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    mainText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        color: '#665954'
    },
    desText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#665954'
    }
})
   