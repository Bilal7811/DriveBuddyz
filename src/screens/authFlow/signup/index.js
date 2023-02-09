import React, { useContext, useState } from 'react'
import { View, Text,} from 'react-native'
import { useDispatch } from 'react-redux';
import { routes } from '../../../services'
import { styles } from './styles';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';
import { ButtonWithIcon, PhoneInputWithCountryCode, TextInputComponent } from '../../../components';

const SignupScreen = ({ navigation }) => {
  const theme = useContext(themeContext)
  const [userName, setuserName] = useState(() => "")
  const [emailAddress, setemailAddress] = useState(() => "")
  const [phoneNumber, setphoneNumber] = useState(() =>"")
  const [countryCode, setcountryCode] = useState(() => "")


  const dispatch = useDispatch()

  // const onPressSignup = () => {
  //   dispatch(userSave(true))
  //   navigation.replace(routes.drawer)
  // }

  return (
    <View style={[styles.container, { backgroundColor: theme.background,}]} >
      <View style={styles.wrapper}>
      <TextInputComponent value={userName} method={(value) => setuserName(value)} placeholder={'Name'}/>
      <TextInputComponent value={emailAddress} method={(value) => setemailAddress(value)} placeholder={'name@example.com'}/>
      <PhoneInputWithCountryCode value={phoneNumber} method={(value) => setphoneNumber(value)} countryMethod={(value) => setcountryCode(value) }/>
      <ButtonWithIcon onPress={() => navigation.navigate(routes.phoneVerfify)}  color={'white'}  buttonTitle={'Sign Up'}/>
      </View>
    </View>
  )
}

export default SignupScreen