import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../styles/theme.js';

export default function FlatButton({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>

            <View style={styles.button}>
            <Text style={styles.buttonText}>{ text } 
            <AntDesign name="caretright" size={10} color={COLORS.green}/>
            </Text>
            </View>

        </TouchableOpacity>

    )
}

const styles= StyleSheet.create({

    button:{
        marginTop:15,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
          shadowOpacity: 0.02,
          shadowOffset:{
            width: 5,
            height: 5
          },

    },
    buttonText:{
        color: COLORS.gray,
        fontSize: 15,
        textAlign: 'left',

    },


})