import { StyleSheet } from 'react-native';
import { appIcons,colors,fontFamily } from '../../../services/utilities'

export const styles = StyleSheet.create({

  mainContiner:{
    flex:1,
  },
  firstSec:{
    flex:0.3,
    paddingTop:10,
  },
  secondSec:{
    flex:2.5, 
    backgroundColor: '#F8F8F8', 
    paddingTop:18, 
    paddingHorizontal:10
  },
  textOne:{
    fontFamily:fontFamily.appTextExtraBold,
    textAlign:'center',
    fontSize:30,
    paddingBottom:15,
    paddingTop:10,
  },
  textTwo:{
    textAlign:'center', 
    fontSize:14,
},
imagesStyle:{
    height: 100,
    width: 100, 
    borderRadius: 50
}
  
})