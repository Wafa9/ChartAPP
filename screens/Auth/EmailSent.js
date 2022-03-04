import {useRoute,useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useContext} from 'react';
import { StyleSheet,Text ,View,TouchableOpacity,Image} from 'react-native';
import globalText from '../../styles/globalText';
import globalStyles from '../../styles/global'
import LoginComponent from "../../components/login/loginComponent";
import loginUser from "../../context/actions/auth/loginUser";
import {GlobalContext} from "../../context/provider";
import Button from '../../components/Button';
import { Inter_100Thin } from '@expo-google-fonts/inter';
import { COLORS } from '../../styles/theme';


const EmailSentScreen = (props) => {

    const {navigate} = useNavigation();

  

  return (

    <View style={styles.container}>

     
      
        <Text style={{color:COLORS.gray50,alignSelf:'center', fontFamily:"Bold", fontSize:25,marginTop:70}}>Activation Email</Text>
        <Text style={{color:COLORS.gray50,alignSelf:'center', fontFamily:"Normal", fontSize:15,padding:20,textAlign:"center"}}>Your account was created successfully, to activate click on the link sent by our team </Text>

       



<Image
        height={100}
        width={100}
        source={require('../../assets/images/Confirm.png')}
        style={globalStyles.welcomeImage}
      />
    
    <TouchableOpacity
    onPress={()=>{navigate("Welcome")}}
    style={styles.btn}
    >
    <Text style={{fontFamily:"Normal",color:COLORS.white,fontSize:20,}}>Back</Text>

    </TouchableOpacity>
  
    
    </View>

  );
  
 
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        alignItems:'center'
      
    },

    btn:{
        margin:10,
        backgroundColor:COLORS.pink,
        padding:5,
        borderRadius:10,
        alignItems:'center',
        alignSelf:'center', 
        height:40,
        width:350,
        shadowColor: '#000',
                    shadowOpacity: 0.15,
                    shadowOffset:{
                     
                      height: 5
                    },
        

    },
    
})



export default EmailSentScreen;
