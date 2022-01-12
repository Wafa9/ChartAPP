import { StyleSheet } from "react-native";
import { COLORS, SIZES,FONTS} from './theme';

const globalText = StyleSheet.create({

              
    h1:{
        textAlign:'left',
        fontSize: SIZES.h1,
        fontFamily: "Normal", 
        padding:2,
        margin:2
      },
  
    h2: {
        textAlign:'center',
        fontSize: SIZES.h2,
        fontFamily: "LightItalic", 
        padding:2,
        margin:2
      },

      h3: {
        textAlign:'left',
        fontSize: SIZES.h4,
        fontFamily: "LightItalic", 
        padding:2,
        margin:2
      },

    wideButtonText:{
        color: COLORS.gray,
        fontSize: SIZES.h5,
        padding:2,
        margin:2

    },


});

export default globalText;