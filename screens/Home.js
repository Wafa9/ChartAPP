import React from 'react'
import { View, Text , Image , ScrollView,} from 'react-native';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import Category from '../components/Category.js';
import CategorySlider from '../components/CategorySlider';
import Transactions from '../components/Transactions';
import globalText from '../styles/globalText';
import globalStyles from '../styles/globalElements';

 const Home = () => {

     function renderHeader(){
         return(
        <View style = {globalStyles.homeHeader}>
         <View style={{flex:1}}>
          <Text style={{...globalText.h1, marginTop:40,}} >Hello , Wafa</Text>
         </View>
         {/* Nonfiction Button */}
        </View>
         )}

    return (
        <View style ={{flex: 1,backgroundColor: COLORS.white}}>
            
            {/* HEADER */}
            {renderHeader()}

            {/* Content */}
            
          <View style={{height:130 , marginTop:SIZES.margin}}>
             
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category name='Balance' title = 'money-check-alt'style={ COLORS.brown} />
            <Category name='Saving' title = 'donate' style={COLORS.pink} />
            <Category name='Income' title = 'money-bill-wave'style={ COLORS.green } />
            <Category name='Loans' title = 'warehouse'style={ COLORS.gray}/>
            <Category name='Wishlist' title ='star' style={ COLORS.pink}/> 
         </ScrollView>

           </View>
          
            <CategorySlider/>
          {/* Transactions */}
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20}}>
          <Transactions/>
          </ScrollView>
          
        </View>
    )
}

export default Home
