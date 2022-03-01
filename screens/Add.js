import * as React from "react";
import {View, Text, Image, StyleSheet, Button, TextInput} from "react-native";
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { FieldArray, Formik} from "formik";
import axios from 'axios';

const AddScreen =()=>{

    const radioopt = [{},{},{},{}];

    const submit = (val) => {
        if(val.type == "" || val.category == "" || val.amount == ""){
            alert("Please Enter all details");
            return;
        }
        // 'http://192.168.8.143:8000/transactions/'
        axios.post('https://621e3a36849220b1fc93a441.mockapi.io/chartap/transactions', {
           
                "id": "1",
                "type": val?.type,
                "category": val.category,
                "amount": val?.amount,
                // "owner" : "",
                "date" : Date.now(),
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <View style={{flex: 1, backgroundColor:COLORS.gray}}>

            <Formik
            initialValues={{type:'',category:'', amount:''}}
            onSubmit={(values)=>{submit(values)}}
            >
                {(props)=>(
                    <View style={styles.whitecard}>

                        <TextInput
                        style={styles.inputstyle}
                        placeholder='type'
                        onChangeText={props.handleChange('type')}
                        value={props.values.type}
                        />
                        
                        <TextInput
                        style={styles.inputstyle}
                        placeholder='category'
                        onChangeText={props.handleChange('category')}
                        value={props.values.category}
                        />
                        <TextInput
                        style={styles.inputstyle}
                        placeholder='amount'
                        onChangeText={props.handleChange('amount')}
                        value={props.values.amount}
                        keyboardType='numeric'
                        />
    

                        <View style={{margin:10,padding:0, backgroundColor:COLORS.pink, borderRadius:6}}>
                        <Button title='Submit' color='white' onPress={props.handleSubmit}></Button>

                        </View>

                    </View>
                )}
            </Formik>

        </View>
    );



}

const styles = StyleSheet.create({
    inputstyle:{
        borderWidth:1,
        borderColor: 'gray',
        padding:10,
        fontSize:20,
        borderRadius:6,
        margin :10
    },
    whitecard:{
            flex: 1,
            backgroundColor: '#fbfbfb',
            marginTop: 100,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            padding: 20, 
            paddingTop:50,
            shadowColor: '#000',
            shadowOpacity: 0.1, },
})

export default AddScreen;