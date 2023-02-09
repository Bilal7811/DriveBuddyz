import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {colors, routes} from '../../../services';
import {UserUsage, ScreenHeader, ButtonWithIcon} from '../../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function PhoneVerification({navigation}) {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View style={styles.firstSec}>
        <ScreenHeader
          onPress={() => navigation.navigate(routes.userLogin)}
          secondText={'Enter your OTP code here'}
          text={'Phone Verification'}
        />
      </View>
      <View style={[styles.secondSec, {}]}>
        <View style={styles.otpView}>
        <OTPInputView
          style={styles.otpDesign}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          placeholderCharacter={'*'}
          placeholderTextColor={'black'}
          // onCodeFilled={code => {
          //   console.log(`Code is ${code}, you are good to go!`);
          // }}
        />
        </View>
        <ButtonWithIcon onPress={() => navigation.navigate(routes.paymentMethod)} color={colors.white} buttonTitle={'Verify Now'} paddingHorizontal={30}/>
      </View>
    </View>
  );
}
