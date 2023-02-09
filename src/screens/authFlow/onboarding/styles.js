import { StyleSheet } from 'react-native';
import { appIcons,colors,fontFamily } from '../../../services/utilities'

export const styles = StyleSheet.create({

  mainContiner:{
    flex:1
  },
  Container:{
    flex:1,
    justifyContent:'space-between'
  },
  slide1: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne:{
    fontFamily:fontFamily.appTextExtraBold,
    textAlign:'center',
    paddingTop:40,
    paddingBottom:30, 
    fontSize:30
  },
  texttwo:{
    textAlign:'center', 
    paddingHorizontal:70, 
    fontSize:14,
    fontFamily:fontFamily.appTextRegular,
},
Button:{
  backgroundColor:colors.theme, 
  paddingHorizontal:30, 
  paddingVertical:10, 
  borderRadius:5, 
  marginTop:60
},
ButtonText:{
  color:colors.white,
  fontSize:16,
  fontFamily:fontFamily.appTextExtraBold,
}

})