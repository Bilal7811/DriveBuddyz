import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {appIcons, colors, fontFamily} from '../../services/utilities';

export default function TextInputComponent({
  method,
  value,
  placeholder,
  keyboardType,
  disable,
  multiline,
  numberOfLines,
  height,
  font
}) {
  const sndDataToParent = data => {
    method(data);
  };

  return (
    <View>
      <View style={[styles.inputStyle,{height: height ? height : 45}]}>
        <TextInput
          style={{fontFamily: font ? font : fontFamily.appTextBold}}
          onChangeText={value => sndDataToParent(value)}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          editable={disable}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.grey,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
});
