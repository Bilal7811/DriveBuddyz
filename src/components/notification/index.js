import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React,{useContext} from 'react'
import { colors, fontFamily } from '../../services'
import themeContext from '../../services/config/themeContext'

export default function NotificationComponent() {
const theme = useContext(themeContext);

  return (
    <View style={{borderBottomColor:colors.grey, borderBottomWidth:1, backgroundColor:theme.background}}>
    <View style={{flexDirection:'row', alignItems:'center',paddingHorizontal:15,height:80}}>
    <View style={{backgroundColor:'#F1F1F1', height:45,width:45, borderRadius:50, justifyContent:'center',alignItems:'center', marginRight:10}}>
    <Ionicons color={colors.theme} size={28} name={'logo-firefox'}/>
    </View>
    <View>
      <Text style={{fontFamily:fontFamily.appTextBold, fontSize:16, color:theme.color}}>System</Text>
      <Text style={{fontFamily:fontFamily.appTextRegular, fontSize:14, color:theme.color}} numberOfLines={1}>Your booking #1234 has been suc...</Text>
      </View>
      </View>
    </View>
  )
}