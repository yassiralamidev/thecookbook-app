import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import MealCard from '../UI/MealCard'

const Results = ({meals,navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        {meals && meals.map((meal,key)=>{
            return(
              <MealCard navigation={navigation} key={key} meal={meal}/>
            )
        })}
      </View>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
  container:{
    padding:20,
    justifyContent:"center",
    alignItems:"center"
  }
})