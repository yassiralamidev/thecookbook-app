import { StyleSheet, Image,TouchableOpacity,Dimensions,Alert,StatusBar} from 'react-native'
import { Platform } from 'react-native'
import React,{useState,useEffect} from 'react'
import {darkBlack,white,orange} from '../constants/colors'
import {CustomText} from "../components"
import Expo from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo';

const logo = require("../assets/images/logo.png")

const Onboarding = () => {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      showNoConnectionAlert();
    }
  }, [isConnected]);

  const showNoConnectionAlert = () => {
    Alert.alert(
      'No Internet connection',
      'Please connect to the Internet to use this application.',
      [{ text: 'OK', onPress: () => exitApp() }],
      { cancelable: false }
    );
  };

  const exitApp = () => {
    Expo.WebBrowser.dismissBrowser();
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle={Platform.OS == 'ios' ? "light-content" : 'dark-content'} />
        <Image source={logo} style={{height:300,width:300}}/>
        <CustomText font="GrandHotel-Regular" style={{color:orange,fontSize:40,textAlign:"center",marginTop:30}}>
          The Cookbook
        </CustomText>
        <CustomText font="Poppins-Regular" style={{color:white,textAlign:"center",fontSize:17}}>
          Discover a new way to cook delicious food and explore creative recipes.
        </CustomText>
        <TouchableOpacity onPress={()=>{navigation.navigate("HomeScreen")}} style={styles.button}>
          <CustomText font="Poppins-Medium" style={{color:darkBlack,textAlign:'center',fontSize:16}}>
            Start Cooking
          </CustomText>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkBlack,
    alignItems: 'center',
    padding:20,
  },
  button:{
    backgroundColor:orange,
    width:Dimensions.get('window').width-40,
    height:40,
    justifyContent:'center',
    borderRadius: 8,
    alignItems:'center',
    position: 'absolute',
    bottom:40,
  },
})