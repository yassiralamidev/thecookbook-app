import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import CustomText from '../UI/CustomText'
import { darkBlack, lightBlack, orange, white } from '../../constants/colors'
import axios from 'axios'
import { BASE_URL } from '../../services/api'

const Areas = ({navigation}) => {

  const [areas, setAreas] = useState([]);


  useEffect(()=>{
    axios.get(`${BASE_URL}/list.php?a=list`)
    .then((res)=>setAreas(res.data.meals))
    .catch((err)=>console.log(err))
  },[])

  return (
    <View style={styles.container}>
      <CustomText font={"GrandHotel-Regular"} style={{color:white,fontSize:26}}>
        Areas
      </CustomText>
      <ScrollView style={styles.areas} showsHorizontalScrollIndicator={false} horizontal={true}>
        {areas && areas.map((area,key)=>{
          return (
            <TouchableOpacity key={key} onPress={()=>navigation.push('Area',{area:area})}>
              <View style={styles.area} key={key}>
                <CustomText font={"Poppins-Medium"} style={{color:orange,fontSize:18}}>
                  {area.strArea}
                </CustomText>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Areas

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },  
  headerRight:{
    flexDirection:"row",
    alignItems:'center'
  },
  areas:{
    marginTop:10,
  },
  area:{
    padding:10,
    height:100,
    width:150,
    backgroundColor:lightBlack,
    alignItems:"center",
    justifyContent:"center",
    marginRight:25,
    borderRadius:7,
  },
})