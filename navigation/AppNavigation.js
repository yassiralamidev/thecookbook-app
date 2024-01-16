import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Area, Categorie, MealInfo, Onboarding} from "../screens"
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled:true,
      }}
    > 
      <Stack.Screen name='Onboarding' component={Onboarding}/>
      <Stack.Screen name='HomeScreen' component={TabNavigation}/>
      <Stack.Screen name="Categorie" component={Categorie}/>
      <Stack.Screen name="Area" component={Area}/>
      <Stack.Screen name='MealInfo' component={MealInfo} />
    </Stack.Navigator>
  )
}

export default AppNavigation