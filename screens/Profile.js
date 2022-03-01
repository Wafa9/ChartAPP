import * as React from "react";
import {View, Text, Image, StyleSheet, Button} from "react-native";
// import styling
import globalStyles from '../styles/globalElements.js';
import globalText from '../styles/globalText';
import { COLORS } from '../styles/theme.js';
// import components
import UserName from "../components/UserName";
import FlatButton from "../components/Buttons";




const  ProfileScreen = ({ navigation }) => { 



    return (
      
      <View style={{ flex: 1, backgroundColor:COLORS.green}}>
    

      <View style={globalStyles.avatarcontainer}>
        <Image source={require('../assets/icons/Profile.png')} style={globalStyles.Avtrimg}/>
      </View>
     
      <View style={{marginTop:160, alignItems:"center"}}>
      <UserName/>
      <Text style={globalText.h2} >email</Text>
      </View>
        <View style={globalStyles.profileWhitecard}>

          <View style={{marginTop:50,paddingHorizontal:20,}}>
         

          <View style={{ marginTop:10,}}>
          <Text style={globalText.h1} >Settings</Text>
          <FlatButton text='Logout' onPress={() => navigation.push("Logout")}></FlatButton>
          </View>

          <View style={{ marginTop:10,}}>
          <Text style={globalText.h1} >Help</Text>
          <FlatButton text='Help center' onPress={() => navigation.push("Logout")}></FlatButton>
          </View>

          </View>

        </View>
       
      </View>
    );
  }

  

  export default ProfileScreen;
  