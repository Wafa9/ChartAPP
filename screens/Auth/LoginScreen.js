import { View, Text, StatusBar, ScrollView, Alert } from "react-native";
import globalStyles from "../../styles/global";
import globalText from "../../styles/globalText";
import Spacer from "../../components/Spacer";
import { WP } from "../../utils/resources";
import { COLORS } from "../../styles/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axiosInstance from "../../helpers/axiosInterceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {useContext} from 'react';
import LoginComponent from "../../components/login/loginComponent";
import loginUser from "../../context/actions/auth/loginUser";
import {GlobalContext} from "../../context/provider";


const LoginScreen = (props) => {

  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, email: params.data.email});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.email && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
  
 
};

export default LoginScreen;

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");


// const onLogin = async() => {
//   if (email != "" && password != "") {
    
//     const ban = await axiosInstance.post('auth/login/', {
//     email,
//     password,
//   })
//   .then((res) => {
//     AsyncStorage.setItem('token', res.data.tokens["access"]);
//     AsyncStorage.setItem('user', JSON.stringify(res.data.user));
//     console.log(res)
    
//   })
//   .catch((err) => {console.log("error")});
  
//   } else {
//     Alert.alert("Fiance", "Email and Password is required !");
//   }
// };
// return (
//   <>
//     <ScrollView style={globalStyles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="white" />
//       <View style={globalStyles.subContainer}>
//         <Spacer vertical={WP("5%")} />
//         <Text style={{ ...globalText.h1, alignSelf: "center" }}>Login</Text>
//         <Spacer vertical={WP("5%")} />
//         <Input
//           placeholder="Enter your email"
//           value={email}
//           label="Email"
//           icon="email"
//           onChangeText={(text) => {
//             setEmail(text);
//           }}
//         />
//         <Spacer vertical={WP("3%")} />
//         <Input
//           placeholder="Enter your password"
//           value={password}
//           label="Password"
//           icon="lock"
//           onChangeText={(text) => {
//             setPassword(text);
//           }}
//         />
//         <Spacer vertical={WP("5%")} />
//         <Button
//           onPress={() => {
//             onLogin();
//           }}
//           title="Login"
//         />
//       </View>
//     </ScrollView>
//     <View style={globalStyles.absoluteText}>
//       <Text style={globalText.labelText}>Create new account</Text>
//     </View>
//     <Button
//       absolute
//       onPress={() => {
//         props.navigation.navigate("Register");
//       }}
//       title="Sign Up"
//     />
//   </>
// );
