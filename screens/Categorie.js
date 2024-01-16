import { StyleSheet, SafeAreaView,ScrollView, View, TouchableOpacity,Image,Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import { darkBlack, lightBlack, orange, white } from '../constants/colors'
import { CustomText,MealCard } from '../components'
import { AntDesign } from '@expo/vector-icons';
import { BASE_URL } from '../services/api';
import axios from 'axios';

const Categorie = ({navigation,route}) => {

  const [meals,setMeals] = useState([])


  useEffect(()=>{
    axios.get(`${BASE_URL}/filter.php?c=${route.params.category.strCategory}`)
    .then(res=>setMeals(res.data.meals))
    .catch(err=>console.log(err))
  },[])


  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.pop()}>
          <AntDesign name="arrowleft" size={24} color={orange} />
        </TouchableOpacity>
        <CustomText font="GrandHotel-Regular" style={{color:orange,fontSize:30}}>
          {route.params.category.strCategory}
        </CustomText>
        <View></View>
      </View>
      <ScrollView style={{paddingLeft:20,paddingRight:20}}>
        <View style={styles.category}>
          <Image 
            style={styles.categoryImage} 
            source={{uri:route.params.category.strCategoryThumb}}
          />
        </View>
        <CustomText font={"Poppins-Regular"} style={{color:white,textAlign:"justify",fontSize:12,marginTop:10}}>
          {route.params.category.strCategoryDescription}
        </CustomText>
        <CustomText font={"GrandHotel-Regular"} style={{color:orange,fontSize:24,marginTop:20}}>
          Meals
        </CustomText>
        <View style={{marginTop:12}}>
        {meals && meals.map((meal,key)=>{
          return(
            <TouchableOpacity key={key}>
              <MealCard navigation={navigation} meal={meal}/>
            </TouchableOpacity>
          )
        })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categorie

const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
    backgroundColor:darkBlack,
  },
  header:{
    flexDirection:"row",
    padding:20,
    justifyContent:'space-between',
    alignItems:"center"
  },
  category:{
    flex:1,
    justifyContent: 'center',
    alignItems:"center"
  },
  categoryImage:{
    height:220,
    width:Dimensions.get('window').width-40,
    backgroundColor:lightBlack,
    borderRadius:7,
  }
});