import * as React from "react";
import {View, Text, Image, StyleSheet, Button} from "react-native";
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import globalStyles from '../styles/global';

// import components
import UserName from "../components/UserName";
import FlatButton from "../components/Buttons";

// import font
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Montserrat_100Thin,
//   Montserrat_400Regular,
//   Montserrat_700Bold,

// } from '@expo-google-fonts/montserrat';

// set the font size
// let fontSize=24;



const  ProfileScreen = () => { 

  // let[fontsLoaded, error] = useFonts({
  // Montserrat_100Thin,
  // Montserrat_400Regular,
  // Montserrat_700Bold,
  // });

     Buttonfunc=()=>{/* here the screens */}

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    return (
      <View style={{ flex: 1, backgroundColor:COLORS.green,}}>

      <View style={globalStyles.avatarcontainer}>
        <Image source={require('../assets/icons/Profile.png')} style={globalStyles.Avtrimg}/>
      </View>
        <View style={globalStyles.whitecard}>

          <View style={{marginTop:50,paddingHorizontal:20,}}>
          <Text style={globalStyles.h1}  >Name</Text>
          <UserName/>
          <Text style={globalStyles.h1} >Phone</Text>
          <Text style={globalStyles.h2} >+966555555555</Text>

          <View style={{ marginTop:10,}}>
          <Text style={globalStyles.h1} >Change info</Text>
          <FlatButton text='Change the phone number' onPress={Buttonfunc}></FlatButton>
          <FlatButton text='Change the name' onPress={Buttonfunc}></FlatButton>
          </View>

          <View style={{ marginTop:10,}}>
          <Text style={globalStyles.h1} >Help</Text>
          <FlatButton text='Help center' onPress={Buttonfunc}></FlatButton>
          </View>

          </View>

        </View>
       
      </View>
    );
  }

  

  export default ProfileScreen;
  