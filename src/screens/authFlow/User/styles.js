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
    paddingHorizontal:10
  }
  
})