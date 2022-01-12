import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image,TouchableOpacity } from 'react-native'
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { FontAwesome5 } from '@expo/vector-icons';
import Details from '../screens/Details.js';
import { useNavigation } from '@react-navigation/native';



const Category = (props) => {
      const [backgroundColor, setBackgroundColor] = useState(props.style || null);  
      const [name, setName] = useState(props.name || null);
       const navigation = useNavigation();
        return (
            <TouchableOpacity onPress={()=> {
              navigation.navigate("Details",{screen: "Details"})}} 
              style={{marginLeft: SIZES.margin ,
              marginRight: SIZES.margin}}>
          <View>
             <View style={{ 
             height: 60,
             width: 60,
             backgroundColor: backgroundColor,
             borderRadius: SIZES.radius,
             shadowColor: '#000',
             shadowOpacity: 0.08,
             shadowOffset:{ width: 5, height: 5 },}}>

            <TouchableOpacity onPress={()=> {console.log('it wooooooooork foooofi');}} 
            style={{marginLeft: SIZES.margin ,marginRight: SIZES.margin}}>

            <View>
             <View style={{...globalStyles.categoryPage,backgroundColor: backgroundColor,}}>
            <View />
               <View style={{alignSelf:'center',marginTop:18}}>
               <FontAwesome5 name={props.title} size={20} color="white" />
               </View>
             </View>
             <Text style={{...globalText.h3, alignSelf:'center'}}>{name}</Text>
           </View>
            </TouchableOpacity>
        )
}

export default Category;