import React from 'react'
import { View, Text , Image , ScrollView, SafeAreaView} from 'react-native';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import Category from '../components/Category.js';
import CategorySlider from '../components/CategorySlider';
import Transactions from '../components/Transactions';
 const Home = () => {
     function renderHeader(){
         return(
        <View
         style = {{
        flexDirection: 'row' ,
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal:SIZES.padding,
        alignItems : 'center'

         }}
         >
         <View style={{flex:1}}>
          <Text style={{...FONTS.h2, fontFamily:'Montserrat_700Bold'}} >Hello , Wafa</Text>
         </View>
         {/* Nonfiction Button */}
     </View>
         )}

    return (
        <View 
        style ={{
            flex: 1,
            backgroundColor: COLORS.white
        }}
        >
            
            {/* HEADER */}
            {renderHeader()}

            {/* Content */}
            <View style={{height:130 , marginTop:SIZES.margin}}>
             
         <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            <Category name='Balance' title = 'money-check-alt'style={ COLORS.brown} />
            <Category name='Saving' title = 'donate' style={COLORS.pink} />
            <Category name='Income' title = 'money-bill-wave'style={ COLORS.green } />
            <Category name='Loans' title = 'warehouse'style={ COLORS.gray}/>
            <Category name='Goals' title ='star' style={ COLORS.pink}/>
            
         </ScrollView>
           </View>
          
            <CategorySlider/>
            

          {/* Transactions */}
          
          <ScrollView 
          showsVerticalScrollIndicator={false} 
          style={{marginTop: 20}}>
          <Transactions/>
          </ScrollView>
         
        </View>

    )
}

export default Home
