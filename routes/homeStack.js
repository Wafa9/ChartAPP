import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';


const HomeStack = createStackNavigator();

export default () =>(
<NavigationContainer>
 <HomeStack.Navigator initialRouteName='Home'>
     <HomeStack.Screen name="Home" component={Home} />
     <HomeStack.Screen name="Details" component={Details} />
 </HomeStack.Navigator>
</NavigationContainer>
);