import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fontFamily} from '../../services';
import themeContext from '../../services/config/themeContext';

export default function ButtonWithIcon({
  marginTop,
  backgroundColor,
  borderColor,
  color,
  iconName,
  buttonTitle,
  marginBottom,
  paddingHorizontal,
  onPress,
  borderRadius,
}) {
  const theme = useContext(themeContext);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          marginTop: marginTop ? marginTop : 10,
          marginBottom: marginBottom ? marginBottom : 10,
          backgroundColor: backgroundColor ? backgroundColor : colors.theme,
          borderColor: borderColor ? borderColor : colors.theme,
          paddingHorizontal: paddingHorizontal,
          borderRadius: borderRadius ? borderRadius : 5,
        },
      ]}>
      {iconName && (
        <Ionicons
          name={iconName}
          size={20}
          color={color ? color : theme.color}
        />
      )}
      <Text
        style={[
          styles.Text,
          {color: color ? color : theme.color, paddingLeft: iconName && 8},
        ]}>
        {buttonTitle}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderWidth: 1,
  },
  Text: {
    fontSize: 16,
    fontFamily: fontFamily.appTextRegular,
    fontWeight: '900',
  },
});
