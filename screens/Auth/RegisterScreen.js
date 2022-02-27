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

//
//   const [form, setForm] = useState({});
//   const {navigate} = useNavigation();
//   const [errors, setErrors] = useState({});
//   const {
//     authDispatch,
//     authState: {error, loading, data},
//   } = useContext(GlobalContext);

//   useFocusEffect(
//     React.useCallback(() => {
//       return () => {
//         if (data || error) {
//           clearAuthState()(authDispatch);
//         }
//       };
//     }, [data, error]),
//   );

//   const onChange = ({name, value}) => {
//     setForm({...form, [name]: value});

//     if (value !== '') {
//       if (name === 'password') {
//         if (value.length < 6) {
//           setErrors((prev) => {
//             return {...prev, [name]: 'This field needs min 6 characters'};
//           });
//         } else {
//           setErrors((prev) => {
//             return {...prev, [name]: null};
//           });
//         }
//       } else {
//         setErrors((prev) => {
//           return {...prev, [name]: null};
//         });
//       }
//     } else {
//       setErrors((prev) => {
//         return {...prev, [name]: 'This field is required'};
//       });
//     }
//   };

//   const onSubmit = () => {
//     if (!form.userName) {
//       setErrors((prev) => {
//         return {...prev, userName: 'Please add a username'};
//       });
//     }
//     if (!form.firstName) {
//       setErrors((prev) => {
//         return {...prev, firstName: 'Please add a  first name'};
//       });
//     }
//     if (!form.lastName) {
//       setErrors((prev) => {
//         return {...prev, lastName: 'Please add a last name'};
//       });
//     }
//     if (!form.email) {
//       setErrors((prev) => {
//         return {...prev, email: 'Please add a email'};
//       });
//     }
//     if (!form.password) {
//       setErrors((prev) => {
//         return {...prev, password: 'Please add a password'};
//       });
//     }

//     if (
//       Object.values(form).length === 5 &&
//       Object.values(form).every((item) => item.trim().length > 0) &&
//       Object.values(errors).every((item) => !item)
//     ) {
//       register(form)(authDispatch)((response) => {
//         navigate(LOGIN, {data: response});
//       });
//     }
//   };