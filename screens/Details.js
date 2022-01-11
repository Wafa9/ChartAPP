import React from 'react'
import { View, Text , Image , ScrollView,} from 'react-native';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { data } from '../config/data.js';

const Details = () => {
    return(
        <View>
            {data.map(item => (
            <View key={item.id}> 
                <Text style={{color:COLORS.gray40}}>{item.type}</Text>
                <Text style={{color:COLORS.gray90}}>{item.total}</Text>
            </View>
            ))}
        </View>
    )}
export default Details;