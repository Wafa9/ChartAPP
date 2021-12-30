import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';


export default function App(){
     const[operation , setOperation] = useState([
        {type: 'income' , amount:'300' , key: '1'} ,
        {type: 'Salary' , amount:'6,903', key: '2'},
        {type: 'grocery' , amount:'-143' , key: '3'},
        {type: 'car loan' , amount:'-2,443', key: '4'}
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
        disableVirtualization={true}
        keyExtractor={item => item.key}
        snapToInterval={90}
        decelerationRate='fast'
        renderItem={({item}) =>{
         return(
             <ScrollView
              onPress={()=>{}}
              style={{
              height: 120,
              width: 350,
              
              }}
             >
             <View style={{ 
                 padding: 20,
                 marginTop:SIZES.margin,
                 backgroundColor: COLORS.gray10,
                 borderRadius:SIZES.radius,
                 }}>
             
              <Text style={{fontFamily:'Montserrat_100Thin'}}>{item.type}</Text>
              <Text style={{fontFamily:'Montserrat_100Thin'}}>{item.amount}</Text>
            </View>
          
          </ScrollView>
         )}}
       />
      </View>
  </View>
)

}

