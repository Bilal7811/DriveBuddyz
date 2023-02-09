import { StyleSheet } from 'react-native';
import { appIcons,colors,fontFamily } from '../../../services/utilities'

export const styles = StyleSheet.create({

  mainContiner:{
    height:'100%'
    
  },
  firstSec:{
    height:350,
    justifyContent:'center', 
    alignItems:'center'
  },
  secondSec:{
    height:418,
    backgroundColor:'#F8F8F8', 
    justifyContent: 'center',
    position:'relative',
  },
  textOne:{
    fontFamily:fontFamily.appTextExtraBold,
  },
  texttwo:{
    fontSize:14,
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