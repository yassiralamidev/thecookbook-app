import { StyleSheet,View,TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../UI/CustomText';

import { darkBlack,orange,white } from '../../constants/colors';

const Header = ({setSearch}) => {


  const [text, setText] = useState('');

  const handleSearch = () => {
    setSearch(text)
  };

  return (
    <View style={styles.container}>
      <CustomText font={"GrandHotel-Regular"} style={{color:orange,fontSize:30,textAlign:"center"}}>Search Meals</CustomText>
      <View>
        <Ionicons name="search-sharp" size={24} color={darkBlack} />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder='Search a meal by name ...'
          returnKeyType='search'
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius:7,
    backgroundColor:orange,
    color:darkBlack,
  },
})