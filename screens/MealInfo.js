import { StyleSheet, Image, View,SafeAreaView,TouchableOpacity, Dimensions,ScrollView,Alert } from 'react-native'
import React,{useState,useEffect,useCallback} from 'react'
import {CustomText,FavoriteButton} from '../components'
import { AntDesign } from '@expo/vector-icons';
import { orange,darkBlack,lightBlack, white } from '../constants/colors';
import axios from 'axios';
import YoutubePlayer from "react-native-youtube-iframe";
import { BASE_URL } from '../services/api';

const MealInfo = ({navigation,route}) => {

  const [meal,setMeal] = useState([])
  const [ingredients,setIngredients] = useState([]);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/lookup.php?i=${route.params.meal.idMeal}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
        let newIngredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredientKey = `strIngredient${i}`;
          const ingredientValue = res.data.meals[0][ingredientKey];
          const measureKey = `strMeasure${i}`;
          const measureValue = res.data.meals[0][measureKey];
          if (ingredientValue !== "" && measureValue !== "") {
            newIngredients.push({ ingredient: ingredientValue, measure: measureValue });
          }
        }
        setIngredients(newIngredients);
      })
      .catch((err) => console.log(err));
  }, [route.params.meal.idMeal]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.pop()}>
          <AntDesign name="arrowleft" size={24} color={orange} />
        </TouchableOpacity>
        <CustomText font="GrandHotel-Regular" style={{color:orange,fontSize:30}}>
          {route.params.meal.strMeal}
        </CustomText>
        <View></View>
      </View>
      <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={styles.mealImage} source={{uri:meal.strMealThumb}}/>
        </View>
        <View style={styles.labels}>
          <View style={styles.label}>
            <CustomText font={"Poppins-Medium"} style={{color:orange}}>{meal.strCategory}</CustomText>
          </View>
          <View style={styles.label}>
            <CustomText font={"Poppins-Medium"} style={{color:orange}}>{meal.strArea}</CustomText>
          </View>
          {meal && meal.strTags &&
            <View style={styles.label}>
              <CustomText font={"Poppins-Medium"} style={{color:orange}}>{meal.strTags}</CustomText>
            </View>
          }
        </View>
        <View style={styles.instructionsContainer}>
          <CustomText font={"GrandHotel-Regular"} style={{color:orange,fontSize:22,marginBottom:5}}>Ingredients</CustomText>
          {ingredients && ingredients.map((ingredient,key)=>{
            return(
              <CustomText 
                key={key}
                style={{color:white}}
              >
                - {ingredient.ingredient} ( {ingredient.measure} )
              </CustomText>
            )
          })}
        </View>
        <View style={styles.instructionsContainer}>
          <CustomText font={"GrandHotel-Regular"} style={{color:orange,fontSize:22,marginBottom:5}}>Instructions</CustomText>
          <CustomText font={"Poppins-Regular"} style={{color:white}}>{meal.strInstructions}</CustomText>
        </View>
        {meal.strYoutube &&
        <View style={styles.youtubeContainer}>
        <CustomText font={"GrandHotel-Regular"} style={{color:orange,fontSize:22,marginBottom:10}}>Recipe Video</CustomText>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={meal.strYoutube.match(/[?&]v=([^&]+)/)[1]}
        onChangeState={onStateChange}
      />
    </View>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MealInfo

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
  mealImage:{
    height:230,
    width:Dimensions.get('window').width -40,
    borderRadius:7,
  },
  labels:{
    flexDirection:'row',
    marginTop:10,
    flexWrap:"wrap",
    paddingLeft:20,
    paddingRight:20,
  }, 
  label:{
    marginRight:10,
    marginTop:10,
    paddingLeft:8,
    paddingRight:8,
    paddingTop:3,
    paddingBottom:3,
    backgroundColor:lightBlack,
    borderRadius:6,
  },
  instructionsContainer:{
    marginTop:20,
    paddingLeft:20,
    paddingRight:20,
  },
  youtubeContainer:{
    marginTop:20,
    paddingLeft:20,
    paddingRight:20,
  }
})