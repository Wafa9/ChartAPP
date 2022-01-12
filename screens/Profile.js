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

    Buttonfunc=()=>{/* here the screens */};
    return (
      
      <View style={{ flex: 1, backgroundColor:COLORS.green}}>
    

      <View style={globalStyles.avatarcontainer}>
        <Image source={require('../assets/icons/Profile.png')} style={globalStyles.Avtrimg}/>
      </View>
        <View style={globalStyles.whitecard}>

          <View style={{marginTop:50,paddingHorizontal:20,}}>
          <Text style={globalText.h1}  >Name</Text>
          <UserName/>
          <Text style={globalText.h1} >Phone</Text>
          <Text style={globalText.h2} >+966555555555</Text>

          <View style={{ marginTop:10,}}>
          <Text style={globalText.h1} >Change info</Text>
          <FlatButton text='Change the phone number' onPress={() => navigation.push("changePhone")}></FlatButton>
          <FlatButton text='Change the name' onPress={() => navigation.push("changeUsername")}></FlatButton>
          </View>

          <View style={{ marginTop:10,}}>
          <Text style={globalText.h1} >Help</Text>
          <FlatButton text='Help center' onPress={Buttonfunc}></FlatButton>
          </View>

          </View>

        </View>
       
      </View>
    );
  }

  

  export default ProfileScreen;
  