

import React, { useEffect, useState } from 'react'
import { Text, View  , FlatList, TextInput} from 'react-native'
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import globalText from '../styles/globalText';
import globalStyles from '../styles/globalElements';
import { Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//agenda import
import { Agenda } from "react-native-calendars";

// // global func
const timeToString = (time) => {
  
  // hook state
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

const CalendarScreen = () => {

  const[operation , setOperation] = useState();
useEffect(()=>{

  fetch('http://192.168.8.150:8000/discount/codes/',{
  method:'GET',
      headers:{
         "Access-Control-Allow-Origin":'*',
         'Accept':'application/json',
         'Content-Type':'application/json'
       }})
      .then((resp) => {
    
             return resp.json()})
      .then((data) =>{
        console.log("hi there")
             setOperation(data)
           })
      .catch((error) => {console.log("error")})

},[])


return(
<View style={{paddingTop:100, backgroundColor:COLORS.white, flex:1}}
>
  <Text style={{alignSelf:"center", color:COLORS.pink,fontSize:30,paddingBottom:20, fontFamily:"Normal" }}>Discount Codes</Text>
  <View style={{
  backgroundColor: COLORS.white,
   alignSelf:'center'
    }}>
  
   <FlatList 
    data={operation}
    disableVirtualization={false}
    keyExtractor={item => item.key}
    snapToInterval={90}
    decelerationRate='fast'
    renderItem={({item}) =>{
     return(
         <View style={{height: 100,width: 350}}>
         <View style={globalStyles.codesContainer}>
         <MaterialCommunityIcons
                name={item.icon}
                size={70}
                color={"gray"}
                style={{alignSelf:"flex-start"}}
                
              />
            <View>
          <Text onPress={()=>Linking.openURL(item.website)} style={globalText.h3}>{item.website}</Text>
          <TextInput defaultValue={item.code} style={{backgroundColor:COLORS.white, padding:5,width:250}}></TextInput>
          <Text style={globalText.h3}>Discount code givesss you a {item.precent}%</Text>
          </View>
          </View>
       
      
      </View>
     )}}
   />
   
  </View>
</View>
)

    
   
  }

  export default CalendarScreen;

  