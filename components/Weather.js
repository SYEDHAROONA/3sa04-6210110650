import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
     const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0 
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=198c2f6ae3c3f362b5039115929f1cc1`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
   
    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <Text style={styles.desText}> 
                The weather in
                <Text> 
                    "{props.zipCode}."
                </Text>
            </Text>
            
            <Forecast {...forecastInfo}/>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        width: 400,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    desText: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: 400,
        textAlign: 'center',
        fontSize: 30,
        color: '#FFFFFF'
    }
})
   