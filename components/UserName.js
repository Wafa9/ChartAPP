import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';

let fontSize=24;
const  UserName = ({ title }) => { 
  let[fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    })
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
      <View>
  
          <Text style={styles.usernametext}>{title}</Text>
          
      </View>
    );
  }}

  UserName.defaultProps = {
    title:'john doe'
  }

  const styles = StyleSheet.create({
    usernametext:{textAlign:'center',fontSize,fontFamily: "Montserrat_400Regular", marginTop:10,backgroundColor:'white',borderRadius:10}
  })

 
  export default UserName;
  