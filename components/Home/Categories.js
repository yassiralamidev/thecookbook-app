import { ScrollView, StyleSheet, ImageBackground, View,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import CustomText from '../UI/CustomText'
import { lightBlack, orange, white } from '../../constants/colors'
import axios from 'axios'
import { BASE_URL } from '../../services/api'
import { AntDesign } from '@expo/vector-icons';

const Categories = ({navigation}) => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios.get(`${BASE_URL}/categories.php`)
    .then((res)=>setCategories(res.data.categories))
    .catch((err)=>console.log(err))
  },[])


  return (
    <View style={styles.container}>
      <CustomText font={"GrandHotel-Regular"} style={{color:white,fontSize:26}}>
        Categories
      </CustomText>
      <ScrollView style={styles.categories} showsHorizontalScrollIndicator={false} horizontal={true}>
        {categories && categories.map((category)=>{
          return (
            <TouchableOpacity onPress={()=>navigation.push('Categorie',{category:category})} key={category.idCategory}>
              <ImageBackground source={{uri:category.strCategoryThumb}} style={styles.category}>
              <View style={styles.overlay}>
                <CustomText font={"Poppins-Medium"} style={{color:white,fontSize:18}}>
                  {category.strCategory}
                </CustomText>
              </View>   
            </ImageBackground>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  categories:{
    marginTop:10,
  },
  category:{
    height:150,
    width:150,
    backgroundColor:orange,
    alignItems:"center",
    justifyContent:"center",
    marginRight:25,
    borderRadius:7,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
})