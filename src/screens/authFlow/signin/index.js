import React, { useContext, useState, useEffect } from 'react'
import { View, Text} from 'react-native'
import { useDispatch } from 'react-redux';
import {routes } from '../../../services'
import { Statusbar, PhoneInputWithCountryCode, ButtonWithIcon } from '../../../components';
import { styles } from './styles';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';
import { useSelector } from 'react-redux';


const LoginScreen = ({ navigation }) => {

  const theme = useContext(themeContext)
  const user = useSelector((state) => state.splash)
  const dispatch = useDispatch()
  const [phoneNumber, setphoneNumber] = useState("")
  const [countryCode, setcountryCode] = useState("")
  const onPressLogin = () => {
    var icon = user.profileImage !== null ? user.profileImage : null
    dispatch(userSave({value: true, profileImage: icon}))
    navigation.replace(routes.drawer)
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      <Statusbar/>
      <View style={styles.wrapper}>
        <Text style={[styles.text, {color:theme.color}]}>Login with your phone number</Text>
        <PhoneInputWithCountryCode value={phoneNumber} method={(value) => setphoneNumber(value)} countryMethod={(value) => setcountryCode(value) }/>
        <ButtonWithIcon onPress={() => onPressLogin()}  color={'white'}  buttonTitle={'Sign In'}/>
      </View>
    </View>
  )
}

export default LoginScreen