import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity} from 'react-native'
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
             <View />
              <Text>{item.type}</Text>
              <Text>{item.amount}</Text>
            </View>
          
          </TouchableOpacity>
         )}}
       />
      </View>

    )
}