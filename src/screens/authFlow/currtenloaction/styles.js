import { StyleSheet } from 'react-native';
import { appIcons,colors,fontFamily } from '../../../services/utilities'

export const styles = StyleSheet.create({

  mainContiner:{
    flex:1,
  },
  firstSec:{
    flex:1,
    justifyContent:'flex-end' 
  },
  secondSec:{
    flex: 1, 
    justifyContent: 'center',
    paddingHorizontal:15,
    alignItems:'center',
  },
  textOne:{
    fontFamily:fontFamily.appTextExtraBold,
    textAlign:'center',
    paddingVertical:20,
    fontSize:30
  },
  texttwo:{
    textAlign:'center', 
    fontSize:14,
    paddingHorizontal:55,
    fontFamily:fontFamily.appTextRegular,
},
bottomText:{
  textAlign:'center', 
  fontSize:14,
  fontFamily:fontFamily.appTextRegular,
  color: colors.theme,
  textDecorationLine:'underline',
}
  
})