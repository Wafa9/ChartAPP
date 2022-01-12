import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import globalStyles from '../styles/globalElements';
import globalText from '../styles/globalText';

export default function App(){
 
    const[operation , setOperation] = useState([
        {type: 'Balance' , amount:'8,443' , key: '1'} ,
        {type: 'Loans' , amount:'10,043', key: '2'},
        {type: 'Goals' , amount:'2,443' , key: '3'},
        {type: 'Saving' , amount:'7,443', key: '4'}
    ]);
    
    return(
      
      <View style={globalStyles.categoryContainer}>
         <ImageBackground resizeMode={'stretch'} style={{flex: 1}}
          source={require('../assets/images/BackgroundImage.png')}>
             <View
              style={{padding: SIZES.padding }}>
              {/* ProgressChart */}
              <Text style={globalText.h3}>Monthly Limit</Text>
              <Text style={globalText.h3}>$6,400</Text>
          </View>
         
       </ImageBackground>
        
      </View>
     

    )
}