import * as React from "react";
import {View, Text, Image, StyleSheet, Button} from "react-native";
// import screens
import Home from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import CalendarScreen from "../screens/Calendar";
import AddScreen from "../screens/Add";
import Charts from '../screens/Charts';
import ChangeUsername from "./ChangeUsername";
import ChangePhone from "./ChangePhone";
import Completed from "./Completed";
// import bottom navigation
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

//import icons
import { AntDesign } from '@expo/vector-icons';
import globalStyles from "../styles/globalElements";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Screens Stack
const ProfileStackScreen = () => {
  return(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name = 'profile' component={ProfileScreen} options={{headerShown: false,}}/>
    <ProfileStack.Screen name = 'changeUsername' component={ChangeUsername} options={{headerShown: false,}}/>
    <ProfileStack.Screen name = 'changePhone' component={ChangePhone} options={{headerShown: false,}}/>
    <ProfileStack.Screen name ="completed" component={Completed} options={{headerShown: false,}}/>
  </ProfileStack.Navigator>
  )
}


const NavigationBar = () => {
    return(

     

        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}} >
           
             <Tab.Screen name={"Home"} component={Home} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%',}}>
                  <AntDesign name="home" size={24} color={focused? 'black' : 'gray'} />
                </View>),}}></Tab.Screen>

             <Tab.Screen name={"Charts"} component={Charts} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%', }}>
                  <AntDesign name="barschart" size={24} color={focused? 'black' : 'gray'} />
                </View>
              ),
            }}></Tab.Screen>
      
            <Tab.Screen name={"Add"} component={AddScreen} options={{
              tabBarIcon: ({ focused }) =>(
                <TouchableOpacity>
                <View style={globalStyles.plusbutton}>
                 <AntDesign name="plus" size={24} color={focused? 'gray' : 'white'} />
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
      
          
             <Tab.Screen name={"Profile"} component={ProfileStackScreen} options={{
              tabBarIcon: ({ focused }) =>(
                <View style={{position: 'absolute',top: '50%',}}>
                  <AntDesign name="user" size={24} color={focused? 'black' : 'gray'}/>
                </View> ), }}></Tab.Screen>
          </Tab.Navigator>


    );
}



export default NavigationBar;

