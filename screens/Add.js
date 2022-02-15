import * as React from "react";
import {View, Text, Image, StyleSheet, Button, TextInput} from "react-native";
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { FieldArray, Formik} from "formik";

const AddScreen =()=>{

    const radioopt = [{},{},{},{}]

    return(
        <View style={{flex: 1, backgroundColor:COLORS.gray}}>

            <Formik
            initialValues={{type:'',category:'', amount:''}}
            onSubmit={(values)=>{console.log(values)}}
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