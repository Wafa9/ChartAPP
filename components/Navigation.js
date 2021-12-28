import * as React from "react";
import {View, Text, Image, StyleSheet, Button} from "react-native";
// import screens
import Home from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import CalendarScreen from "../screens/Calendar";
// import bottom navigation
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import icons
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(

        <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
           
            <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%',}}>
                  <AntDesign name="user" size={24} color={focused? 'black' : 'gray'}/>
                </View> ), }}></Tab.Screen>
      
      
            <Tab.Screen name={"Home"} component={Home} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%',}}>
                  <AntDesign name="home" size={24} color={focused? 'black' : 'gray'} />
                </View>),}}></Tab.Screen>
      
            <Tab.Screen name={"Add"} component={AddScreen} options={{
              tabBarIcon: ({ focused }) =>(
                <TouchableOpacity>
                <View style={styles.plusbutton}>
                 <AntDesign name="plus" size={50} color={focused? 'gray' : 'white'} />
                </View>
                </TouchableOpacity>
              ),
            }}></Tab.Screen>
      
            <Tab.Screen name={"Calendar"} component={CalendarScreen} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%',}}>
                  <AntDesign name="calendar" size={24} color={focused? 'black' : 'gray'} />
                </View>
              ),
            }}></Tab.Screen>
      
            <Tab.Screen name={"Dashboard"} component={DashboardScreen} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%', }}>
                  <AntDesign name="barschart" size={24} color={focused? 'black' : 'gray'} />
                </View>
              ),
            }}></Tab.Screen>
          </Tab.Navigator>

    );
}


function DashboardScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dashboard!</Text>
      </View>
    );
  }
  
  function AddScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add!</Text>
      </View>
    );
  } 

  const styles = StyleSheet.create({
    
    plusbutton:{
        width: 60,
        height: 60,
        backgroundColor: '#68ab9f',
        borderRadius:60/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset:{
      width: 5,
      height: 5
    },
      },
  });

export default Navigation;

