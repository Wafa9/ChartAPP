import React, {createContext, useState, useEffect} from "react";
import {View, Text, StyleSheet, ActivityIndicator, Alert} from "react-native";
import globalText from '../styles/globalText'
import envs from '../config/env'
import axiosInstance from '../helpers/axiosInterceptor';




const  UserName = () => { 

  const [data, setData]=useState(null);


  useEffect(()=>{
  //axios call
   //axiosInstance.get('/auth/email-verify').catch(err=>{console.log("err",err.response)});
  //fetch call
   fetch('http://192.168.8.150:8000/auth/login/', {
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":'*',
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:'halalahuser1@gmail.com',password:'halalahuser1'}),
    })
    .then((resp) => {
      console.log('json start')
      console.log(resp)
      return resp.json()})
    .then((data) =>{
      console.log('json two')
      console.log(data)
    })
    .catch((error) => {console.log("error")})
  

  },[])

  



      return (
      <View>
  
          <Text style={globalText.h2}>meme</Text>
          
      </View>
    );
  }

  UserName.defaultProps = {
    title:'john doe'
  }


 
  export default UserName;
  