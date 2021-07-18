import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View style = {styles.backText}>
            <Text style={styles.mainText}>
                {props.main}
            </Text>
            <Text style={styles.mainText}>
                <Text>Cloud type{"\n"}</Text>
                {props.description}
            </Text>
            <Text style={styles.mainText}>   
                <Text>Temperature{"\n"}</Text>
                {props.temp}
                <Text>°C</Text>
            </Text>
        
        </View>
    );
   }   
const styles = StyleSheet.create({
    backText: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: 400
    },
    mainText: {
        textAlign: 'center',
        margin: 50,
        fontSize: 30,
        color: '#FFFFFF'
    },
    desText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#665954'
    }
})
   