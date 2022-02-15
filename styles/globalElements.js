import { StyleSheet } from "react-native";
import { COLORS, SIZES,FONTS} from './theme';
let fontSize=24;

const globalStyles = StyleSheet.create({

    whitecard:{
        flex: 1,
            backgroundColor: '#fbfbfb',
            marginTop: 150,
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
                marginTop:40,
                backgroundColor:'white'
              },

    plusbutton:{
                width: 40,
                height: 40,
                backgroundColor: COLORS.green,
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
    wideButton:{
                marginTop:15,
                borderRadius: 10,
                paddingVertical: 12,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                shadowColor: '#000',
                  shadowOpacity: 0.02,
                  shadowOffset:{
                    width: 5,
                    height: 5
                  },
        
            },

    transactionContainer:{ 
               
      padding: 20,
      marginTop:3,
      backgroundColor: COLORS.gray10,
      borderRadius:SIZES.radius,
      shadowColor: '#000',
                  shadowOpacity: 0.06,
                  shadowOffset:{
                    width: 5,
                    height: 5
                  },
      },

    homeHeader:{
        flexDirection: 'row' ,
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal:SIZES.padding,
        alignItems : 'center'
    
         },
         
    categoryContainer:{
      height: 150,
      width: SIZES.width -20,
      borderRadius: 140,
      alignSelf:'center',}, 
      
    categoryPage:{ 
      height: 60,
      width: 60,
      borderRadius: SIZES.radius,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset:{ width: 5, height: 5 },},

    inputstyle:{
        borderWidth:0.2,
        backgroundColor:'white',
        borderColor: 'gray',
        padding:8,
        fontSize:15,
        borderRadius:6,
        marginTop :5,
        marginRight:2,
        marginLeft:2,
        
        
        
    },
    inputCard:{
            flex: 1,
            backgroundColor: '#fbfbfb',
            padding: 20, 
            paddingTop:100,
            shadowColor: '#000',
            shadowOpacity: 0.1, },



});

export default globalStyles;