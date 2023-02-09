import { StyleSheet } from 'react-native';
import { appIcons,colors,fontFamily } from '../../../services/utilities'

export const styles = StyleSheet.create({

  mainContiner:{
    flex:1,
  },
  firstSec:{
    flex:0.8,
  },
  mainText:{
    fontFamily:fontFamily.appTextExtraBold,
    fontSize:35
  },
  secondSec:{
    flex:2.5, 
    backgroundColor: '#F8F8F8', 
    paddingTop:18, 
    paddingHorizontal:30
  },
  otpView:{
    alignItems:'center'
  },
  otpDesign:{
    width: '100%', 
    height: 200,
  },

  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: colors.grey,
  },

  underlineStyleBase: {
    width: 50,
    height: 45,
    color: colors.black,
    fontFamily:fontFamily.appTextExtraBold,
    fontSize:25,
    borderWidth: 0,
    borderBottomWidth: 5,
  },

  underlineStyleHighLighted: {
    borderColor: colors.grey,
  },
  
})