import { StyleSheet } from "react-native";
let fontSize=24;

const globalStyles = StyleSheet.create({

    whitecard:{
        flex: 1,
            backgroundColor: '#fbfbfb',
            marginTop: 100,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            padding: 10, 
            shadowColor: '#000',
            shadowOpacity: 0.1, },
            avatarcontainer:{
                height:80,
                width:80,
                top:10,
                alignSelf:'center',
                position:'absolute',
                shadowColor: '#000',
                    shadowOpacity: 0.08,
                    shadowOffset:{width: 10, height: 10 }, },
 
          
                    
    Avtrimg:{
                width: '100%',
                height: '100%',
                borderRadius:10,
                backgroundColor:'white'
              },
          
    h1:{
                textAlign:'left',
                fontSize,
                fontFamily: "Montserrat_100Thin", 
                marginTop:5,
              },
          
    h2: {
                textAlign:'center',
                fontSize,
                fontFamily: "Montserrat_400Regular", 
                marginTop:10,
                backgroundColor:'white',
                borderRadius:10,
              }



});

export default globalStyles;