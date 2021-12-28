import * as React from "react";
import {View, Text, Image, StyleSheet, Button} from "react-native";
import { COLORS, SIZES,FONTS} from '../styles/theme.js';

// import components
import UserName from "../components/UserName";
import FlatButton from "../components/Buttons";

// import font
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_400Regular,
  Montserrat_700Bold,

} from '@expo-google-fonts/montserrat';

// set the font size
let fontSize=24;



const  ProfileScreen = () => { 

  let[fontsLoaded, error] = useFonts({
  Montserrat_100Thin,
  Montserrat_400Regular,
  Montserrat_700Bold,
  });

  Buttonfunc=()=>{/* here the screens */}

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor:COLORS.green,}}>

      <View style={styles.avatarcontainer}>
        <Image source={require('../assets/icons/Profile.png')} style={styles.img}/>
      </View>
        <View style={styles.whitecard}>

          <View style={{marginTop:50,paddingHorizontal:20,}}>
          <Text style={styles.h1}  >Name</Text>
          <UserName/>
          <Text style={styles.h1} >Phone</Text>
          <Text style={styles.h2} >+966555555555</Text>

          <View style={{ marginTop:10,}}>
          <Text style={styles.h1} >Change info</Text>
          <FlatButton text='Change the phone number' onPress={Buttonfunc}></FlatButton>
          <FlatButton text='Change the name' onPress={Buttonfunc}></FlatButton>
          </View>

          <View style={{ marginTop:10,}}>
          <Text style={styles.h1} >Help</Text>
          <FlatButton text='Help center' onPress={Buttonfunc}></FlatButton>
          </View>

          </View>

        </View>
       
      </View>
    );
  }}

  const styles = StyleSheet.create({

    avatarcontainer:{
      height:80,
      width:80,
      top:10,
      alignSelf:'center',
      position:'absolute',
      shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowOffset:{width: 10, height: 10 }, },

    whitecard:{
      flex: 1,
          backgroundColor: '#fbfbfb',
          marginTop: 100,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          padding: 10, 
          shadowColor: '#000',
          shadowOpacity: 0.1, },

    img:{
      width: '100%',
      height: '100%',
      borderRadius:10,
      backgroundColor:'white'
    },

    h1:{
      textAlign:'left',
      fontSize,
      fontFamily: "Montserrat_100Thin", 
      marginTop:5,
    },

    h2: {
      textAlign:'center',
      fontSize,
      fontFamily: "Montserrat_400Regular", 
      marginTop:10,
      backgroundColor:'white',
      borderRadius:10,
    }
  })

  export default ProfileScreen;
  