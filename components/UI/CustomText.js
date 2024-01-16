import {Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Font from 'expo-font';

const CustomText = ({children,style,font}) => {
  
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Poppins-Regular": require('../../assets/fonts/Poppins-Regular.ttf'),
        "Poppins-Medium": require('../../assets/fonts/Poppins-Medium.ttf'),
        "GrandHotel-Regular": require('../../assets/fonts/GrandHotel-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>loading ...</Text>;
  }else{
    font === "" && "Poppins-Regular"
  }
  return (
    <Text style={[style,{fontFamily:font}]}>
      {children}
    </Text>
  )
}

export default CustomText

const styles = StyleSheet.create({})