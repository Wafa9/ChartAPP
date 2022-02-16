import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../../styles/global";
import globalText from "../../styles/globalText";
import Spacer from "../../components/Spacer";
import { WP } from "../../utils/resources";
import { COLORS } from "../../styles/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axiosInstance from "../../helpers/axiosInterceptor";

const RegisterScreen = (props) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onRegister = () => {
    if (email != "" && password != "") {
      axiosInstance
      .post('auth/register/', {
        email,
        username,
        password,
        
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
    } else {
      Alert.alert("Fiance", "Email and Password is required !");
    }
  };
  return (
    <>
      <ScrollView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={globalStyles.subContainer}>
          <Spacer vertical={WP("5%")} />
          <Text style={{ ...globalText.h1, alignSelf: "center" }}>Sign Up</Text>
          <Spacer vertical={WP("5%")} />
          <Input
            placeholder="Enter your name"
            value={username}
            label="username"
            icon="account-box"
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <Spacer vertical={WP("3%")} />
          <Input
            placeholder="Enter your email"
            value={email}
            label="email"
            icon="email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Spacer vertical={WP("3%")} />
          <Input
            placeholder="Enter your password"
            value={password}
            label="password"
            icon="lock"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Spacer vertical={WP("5%")} />
          <Button
            onPress={() => {
              onRegister();
            }}
            title="Register"
          />
        </View>
      </ScrollView>
      <View style={globalStyles.absoluteText}>
        <Text style={globalText.labelText}>Already have an account? </Text>
      </View>
      <Button
        absolute
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        title="Login"
      />
    </>
  );
};

export default RegisterScreen;