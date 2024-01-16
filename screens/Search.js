import { StyleSheet, SafeAreaView ,View, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { CustomText, MealCard ,Results,Input} from '../components'
import {darkBlack, lightBlack, orange, white} from "../constants/colors"
import { BASE_URL } from '../services/api'
import axios from 'axios'

const Search = ({navigation}) => {

  const [search,setSearch] = useState("")
  const [meals,setMeals] = useState([])

  useEffect(()=>{
    if (search) {
      axios.get(`${BASE_URL}/search.php?s=${search}`)
      .then(res=>setMeals(res.data.meals))
      .catch(err=>console.log(err))
    }
  },[search])


  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <Input setSearch={setSearch}/>
        <Results navigation={navigation} meals={meals}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({

  safeContainer:{
    flex:1,
    backgroundColor:darkBlack,
  },  

});