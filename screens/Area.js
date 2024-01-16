import { StyleSheet, TouchableOpacity, View,SafeAreaView,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { darkBlack,orange, white } from '../constants/colors'
import { AntDesign } from '@expo/vector-icons';
import { CustomText } from '../components';
import MealCard from '../components/UI/MealCard';
import axios from 'axios';
import { BASE_URL } from '../services/api';

const Area = ({navigation,route}) => {


  const [meals,setMeals] = useState([])


  useEffect(()=>{
    axios.get(`${BASE_URL}/filter.php?a=${route.params.area.strArea}`)
    .then(res=>setMeals(res.data.meals))
    .catch(err=>console.log(err))
  },[])



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.pop()}>
          <AntDesign name="arrowleft" size={24} color={orange} />
        </TouchableOpacity>
        <CustomText font="GrandHotel-Regular" style={{color:orange,fontSize:30}}>
          {route.params.area.strArea}
        </CustomText>
        <View></View>
      </View>
      <ScrollView style={styles.mealsList}>
        {meals && meals.map((meal,key)=>{
          return(
            <TouchableOpacity key={key}>
              <MealCard navigation={navigation} meal={meal}/>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Area

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:darkBlack,
  },
  header:{
    flexDirection:"row",
    padding:20,
    justifyContent:'space-between',
    alignItems:"center"
  },
  mealsList:{
    padding:20
  }
})