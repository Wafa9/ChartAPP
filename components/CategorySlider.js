import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';

export default function App(){
 
    const[operation , setOperation] = useState([
        {type: 'Balance' , amount:'8,443' , key: '1'} ,
        {type: 'Loans' , amount:'10,043', key: '2'},
        {type: 'Goals' , amount:'2,443' , key: '3'},
        {type: 'Saving' , amount:'7,443', key: '4'}
    ]);
    
    return(
      
      <View style={{
        height: 150,
        width: SIZES.width -20,
        borderRadius: 140,
        alignSelf:'center',}}>
         <ImageBackground
          resizeMode={'stretch'} // or cover
          style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
          source={require('../assets/images/BackgroundImage.png')}
        >
             <View
              style={{
              padding: SIZES.padding }}>
              {/* ProgressChart */}
              <Text style={{fontFamily:'Montserrat_400Regular'}}>Monthly Limit</Text>
              <Text style={{fontFamily:'Montserrat_400Regular'}}>$6,400</Text>
          </View>
         
       </ImageBackground>
        
      </View>
     

    )
}