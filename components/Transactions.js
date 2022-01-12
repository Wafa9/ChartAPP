import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity} from 'react-native'
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import globalStyles from '../styles/globalElements';
import globalText from '../styles/globalText';


export default function App(){
     const[operation , setOperation] = useState([
        {type: 'Income' , amount:'300' , key: '1'} ,
        {type: 'Salary' , amount:'6,903', key: '2'},
        {type: 'Grocery' , amount:'-143' , key: '3'},
        {type: 'Car loan' , amount:'-2,443', key: '4'}
    ]);
return(
  <View
  >
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
             <View style={{height: 100,width: 350,}}>
             <View style={globalStyles.transactionContainer}>
              <Text style={globalText.h3}>{item.type}</Text>
              <Text style={globalText.h3}>{item.amount}</Text>
            </View>
          
          </View>
         )}}
       />
       
      </View>
  </View>
)

}

