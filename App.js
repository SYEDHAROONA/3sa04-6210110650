import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
 return ( 
   <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen 
            style={styles.desText}
            name="Home" 
            component={ZipCodeScreen} />
         <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
   </NavigationContainer> 
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
      backgroundColor: 'rgba(0,0,0,0.4)'
  }   
})