import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontFamily} from '../../services';
import themeContext from '../../services/config/themeContext';

export default function ScreenHeader({
  text,
  onPress,
  secondText,
  skip,
  onSkippress,
  contentChange,
  marginTop,
}) {
  const theme = useContext(themeContext);

  return (
    <View
      style={[
        styles.firstSec,
        {
          backgroundColor: theme.background == '#FFFFFF' ? 'black' : 'white',
          justifyContent: contentChange ? contentChange : 'space-around',
        },
      ]}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <FontAwesome
          onPress={onPress}
          name="angle-left"
          size={28}
          color={theme.color == '#000000' ? 'white' : 'black'}
        />
        <Text
          onPress={onSkippress}
          style={[
            styles.secondText,
            {color: theme.color == '#000000' ? 'white' : 'black'},
          ]}>
          {skip}
        </Text>
      </View>
      <Text
        style={[
          styles.mainText,
          {color: theme.color == '#000000' ? 'white' : 'black', marginTop:marginTop},
        ]}>
        {text}
      </Text>
      {secondText && (
        <Text
          style={[
            styles.secondText,
            {color: theme.color == '#000000' ? 'white' : 'black'},
          ]}>
          {secondText}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  firstSec: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  mainText: {
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: 35,
  },

  secondText: {
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: 14,
  },
});
