import { View, Text, StatusBar, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import globalStyles from "../../styles/global";
import globalText from "../../styles/globalText";
import Spacer from "../../components/Spacer";
import { WP } from "../../utils/resources";
import { COLORS } from "../../styles/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email != "" && password != "") {
      props.navigation.navigate("TabStack");
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
          <Text style={{ ...globalText.h1, alignSelf: "center" }}>Login</Text>
          <Spacer vertical={WP("5%")} />
          <Input
            placeholder="Enter your email"
            value={email}
            label="Email"
            icon="email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Spacer vertical={WP("3%")} />
          <Input
            placeholder="Enter your password"
            value={password}
            label="Password"
            icon="lock"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Spacer vertical={WP("5%")} />
          <Button
            onPress={() => {
              onLogin();
            }}
            title="Login"
          />
        </View>
      </ScrollView>
      <View style={globalStyles.absoluteText}>
        <Text style={globalText.labelText}>Create new account</Text>
      </View>
      <Button
        absolute
        onPress={() => {
          props.navigation.navigate("Register");
        }}
        title="Sign Up"
      />
    </>
  );
};

export default LoginScreen;
