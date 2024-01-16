import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {CustomText} from '../'
import { orange, white } from '../../constants/colors'
const logo = require("../../assets/images/dark-logo.png")

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomText font={"GrandHotel-Regular"} style={{color:orange,fontSize:24}}>The Cookbook</CustomText>
      </View>
      <View style={styles.containenRight}>
        <Image source={logo} style={{height:40,width:40}}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  containenRight:{
    height:30,
    width:30,
    borderRadius:15,
    backgroundColor:orange,
    justifyContent:"center",
    alignItems:"center"
  }
})