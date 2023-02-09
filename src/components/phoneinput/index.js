import {View, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {colors, fontFamily} from '../../services';

export default function PhoneInputWithCountryCode({method, value, countryMethod}) {
  const phoneInput = useRef(null);
  var disabled = false

  const sndDataToParent = (data) => {
    method(data)
  }
  const sndCountryDataToParent = (data) => {
    countryMethod(data)
  }

  return (
    <View>
      <PhoneInput
        disabled={disabled}
        containerStyle={{
          borderWidth: 0.5,
          borderColor: colors.grey,
          marginVertical:10,
          borderRadius: 5,
          backgroundColor: colors.white,
        }}
        textContainerStyle={{
           height:48,
          borderWidth: 0.5,
          borderColor: colors.grey,
          borderTopRightRadius:5,
          borderBottomRightRadius: 5,
          backgroundColor: colors.white,
        }}
        textInputStyle={{
           height:48,
        color:colors.black,
        fontFamily:fontFamily.appTextRegular,
        fontSize:14,

        }}
        placeholder={'Mobile Number'}
        ref={phoneInput}
        defaultValue={value ? value : ""}
        defaultCode="DM"
        layout="first"
        onChangeText={text => {
          sndDataToParent(text);
        }}
        onChangeFormattedText={text => {
            sndCountryDataToParent(text);
        }}
        autoFocus
      />
    </View>
  );
}


const styles = StyleSheet.create({
    
});