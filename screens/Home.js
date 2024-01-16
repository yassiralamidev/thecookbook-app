import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Header,RandomRecipe,Categories, Areas } from '../components'
import {darkBlack} from "../constants/colors"

const Home = ({navigation}) => {

  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <Header/>
        <RandomRecipe navigation={navigation}/>
        <Categories navigation={navigation}/>
        <Areas navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  safeContainer:{
    flex:1,
    backgroundColor:darkBlack,
  },  
});