import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home,Search,Favorites} from "../screens"
import { orange, white, darkBlack } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:orange,
        tabBarInactiveTintColor:white,
        tabBarStyle:{
          elevation:0,
          backgroundColor:darkBlack,
          borderTopColor:darkBlack
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon:({color})=><Ionicons name='ios-home' size={24} color={color}/>
        }}
      />
      <Tab.Screen
        name='Search' 
        component={Search}
        options={{
          tabBarIcon:({color})=><Ionicons name="search-sharp" size={24} color={color}/>
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
