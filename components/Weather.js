import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0 
    })

    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <Text style={styles.desText}> 
                Zip code is
                <Text> 
                    {props.zipCode}.
                </Text>
            </Text>
            
            <Forecast {...forecastInfo}/>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    desText: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        textAlign: 'center',
        fontSize: 30,
        color: '#665954'
    }
})
   