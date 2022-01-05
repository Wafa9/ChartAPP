import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { FontAwesome5 } from '@expo/vector-icons';

const Category = (props) => {
      const [backgroundColor, setBackgroundColor] = useState(props.style || null);  //store your prop in state like this
      const [name, setName] = useState(props.name || null);

        return (
            <View style={{marginLeft: SIZES.margin ,marginRight: SIZES.margin}}>
                <View>
             <View style={{ 
             height: 60,
             width: 60,
             backgroundColor: backgroundColor,
             borderRadius: SIZES.radius,
             shadowColor: '#000',
             shadowOpacity: 0.08,
             shadowOffset:{ width: 5, height: 5 },}}>

              <View />
               <View style={{alignSelf:'center',marginTop:18}}>
               <FontAwesome5 name={props.title} size={20} color="white" />
               </View>
             </View>
             <Text 
             style={{textAlign:'center',fontFamily:'Montserrat_400Regular',fontSize:16, marginTop:5, alignSelf:'center'}}
             >
             {name}</Text>
           </View>
            </View>
        )
}

export default Category;