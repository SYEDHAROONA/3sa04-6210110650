import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View, Text, StatusBar, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated'


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() =>{
         navigation.navigate('Weather', { zipCode: code})
    }}>
        <View style= {styles.ZipItem}> 
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
        </TouchableHighlight>
    )
   const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../fah.jpg')} style={styles.backdrop}>
            <View style = {styles.backText}>
            <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
        </ImageBackground>
        
    )   
   }

   const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        width: 400,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
       backText: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          width: 400,
          fontSize: 50
       },
       ZipItem: {
           textAlign: 'center',
           
           margin: 63,
           color: '#FFFFFF',
           flexDirection: 'row',
           justifyContent: 'space-between'
       },
       zipPlace: {
           flex: 1
       },
       zipCode: {
           flex: 1
       }
   })