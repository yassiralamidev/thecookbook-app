import { StyleSheet, Image, View, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../UI/CustomText'
import { lightBlack, white } from '../../constants/colors'

const MealCard = ({meal,navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.push("MealInfo",{meal:meal})}>
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={styles.image} source={{uri:meal.strMealThumb}}/>
        </View>
        <View  style={styles.textContainer}>
          <CustomText font={"Poppins-Regular"} style={styles.text}>{meal.strMeal}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MealCard

const styles = StyleSheet.create({
  container:{
    marginBottom:20,
    backgroundColor:lightBlack,
    flexDirection:"row",
    width:Dimensions.get('window').width-40,
    padding:10,
    alignItems:"center",
    borderRadius:7,
  },
  image:{
    borderRadius:7,
    height:150,
    width:150,
  },
  textContainer:{
    paddingLeft:15,
    flex:1
  },
  text: {
    color: white,
    fontSize: 16,
    maxWidth: '100%',
  },
})