import { StyleSheet, View,Image,Dimensions, Touchable, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import {CustomText} from "../"
import { darkBlack, lightBlack, lightOrange, orange, white } from '../../constants/colors'
import { BASE_URL } from '../../services/api'
import axios from 'axios'

const RandomRecipe = ({navigation}) => {

  const [recipe,setRecipe] = useState([]);


  useEffect(()=>{
    axios.get(`${BASE_URL}/random.php`)
    .then((res)=>setRecipe(res.data.meals[0]))
    .catch((err)=>console.log(err))
  },[])

  return (
    <TouchableOpacity onPress={()=>navigation.push('MealInfo',{meal:recipe})}>
      <View style={styles.container}>
      <CustomText font={"GrandHotel-Regular"} style={{color:white,fontSize:26}}>Random Recipe</CustomText>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:recipe.strMealThumb}}/>
        <CustomText font={"Poppins-Regular"} style={{color:white,fontSize:17}}>{recipe.strMeal}</CustomText>
        <View style={styles.labels}>
          <View style={[styles.label,{marginLeft:0}]}>
            <CustomText font={"Poppins-Regular"} style={{color:orange,fontSize:13}}>{recipe.strCategory}</CustomText>
          </View>
          <View style={styles.label}>
            <CustomText font={"Poppins-Regular"} style={{color:orange,fontSize:13}}>{recipe.strArea}</CustomText>
          </View>
          {recipe.strTags && 
          <View style={styles.label}>
            <CustomText font={"Poppins-Regular"} style={{color:orange,fontSize:13}}>{recipe.strTags}</CustomText>
          </View>}
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default RandomRecipe

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  containerHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  card:{
    marginTop:10
  },
  image:{
    height:200,
    width:Dimensions.get('window').width - 40,
    borderRadius:5,
    marginBottom:5,
  },
  labels:{
    flexDirection:'row',
    marginTop:5,
    flexWrap:"wrap"
  },
  label:{
    marginLeft:10,
    paddingLeft:6,
    paddingRight:6,
    paddingTop:3,
    paddingBottom:3,
    borderRadius:13,
    borderColor:orange,
    borderWidth:1,
  }
})