import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import ProgrChart from './ProgrChart'

export default function App(){
 
    const[operation , setOperation] = useState([
        {type: 'Balance' , amount:'8,443' , key: '1'} ,
        {type: 'Loans' , amount:'10,043', key: '2'},
        {type: 'Goals' , amount:'2,443' , key: '3'},
        {type: 'Saving' , amount:'7,443', key: '4'}
    ]);
     const data = {
      labels: ["Swim", "Bike", "Run"], // optional
       data: [0.4, 0.6, 0.8]
       };
    return(
      
      <View style={{
        backgroundColor: COLORS.pink,
        height: 150,
        width: SIZES.width -20,
        borderRadius: SIZES.radius,
        alignSelf:'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset:{ width: 5, height: 5 },
        marginBottom:10,
        }}>
         <ImageBackground
          resizeMode={'stretch'} // or cover
          style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
          source={require('../assets/images/BackgroundImage.png')}
        >
       <FlatList 
        data={operation}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator ={false}
        snapToInterval={90}
        decelerationRate='fast'
        renderItem={({item}) =>{
         return(
             <TouchableOpacity
              onPress={()=>{}}
              style={{
              height: 160,
              width: SIZES.width,
              
              }}
             >
             
             <View style={{ padding: SIZES.padding }}>
             
              
              <Text style={{fontFamily:'Montserrat_400Regular'}}>{item.type}</Text>
              <Text style={{fontFamily:'Montserrat_400Regular'}}>{item.amount}</Text>
            </View>
          
          </TouchableOpacity>
         )}}
       />
       </ImageBackground>
        
      </View>
     

    )
}