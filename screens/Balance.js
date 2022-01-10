import React from 'react'
import { View, Text , Image , ScrollView,} from 'react-native';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';

const Balance = () => {
    return(
        <View>
            <View>
                <Text style={{color:COLORS.gray40}}>Total Balance</Text>
                <Text style={{color:COLORS.gray90}}>$18,450</Text>
            </View>
        </View>
    )}
export default Balance;