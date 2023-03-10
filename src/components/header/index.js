import React, {useContext} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {appIcons, appImages, colors, fontFamily, hp, wp} from '../../services';
import themeContext from '../../services/config/themeContext';

const Header = props => {
  const theme = useContext(themeContext);
  const {
    leftIcon,
    title,
    backgroundColor,
    titleStyle,
    onPress,
    shadow,
    color,
    rightIcon1,
    rightIconStyle,
    fontSize,
    onpressSearch,
    bold,
    searchbackgroundColor,
    onPressrightIcon2,
    rightIcon2,
    darkBackground,
  } = props;
  return (
    <View style={{position: 'absolute', zIndex: 100}}>
      <View style={[styles.container, shadow && styles.shadow]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={onPress}>
              {leftIcon !== null || undefined ? (
                <Image style={styles.iconStyle} source={{uri: leftIcon}} />
              ) : (
                <Image style={styles.iconStyle} source={appImages.addprofile} />
              )}
            </TouchableOpacity>
            <View
              style={[styles.textViewStyle, {marginLeft: leftIcon ? 20 : 0}]}>
              <Text
                style={[
                  titleStyle,
                  styles.textStyle,
                  {
                    color: theme.color,
                    fontSize: fontSize ? fontSize : 18,
                    fontFamily: bold
                      ? fontFamily.appTextBold
                      : fontFamily.appTextSemiBold,
                  },
                ]}>
                {title}
              </Text>
            </View>
          </View>
          <View style={[rightIconStyle, {flexDirection: 'row'}]}>
            {rightIcon1 && (
              <TouchableOpacity
                onPress={onpressSearch}
                style={[
                  styles.rightIconView,
                  {marginRight: hp(2), backgroundColor: theme.backgroundTwo},
                ]}>
                <Image
                  style={[styles.rightIcon, {tintColor: theme.color}]}
                  source={appIcons.search}
                />
              </TouchableOpacity>
            )}
            {rightIcon2 && (
              <TouchableOpacity
                onPress={onPressrightIcon2}
                style={[
                  styles.rightIconView,
                  {
                    backgroundColor: searchbackgroundColor
                      ? searchbackgroundColor
                      : theme.backgroundTwo,
                  },
                ]}>
                <Image
                  style={[styles.rightIcon, {tintColor: theme.color}]}
                  source={rightIcon2}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightIconView: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 10,
    height: 60,
    width: wp(100),
    justifyContent: 'flex-end',
    paddingHorizontal: wp(4),
  },
  textStyle: {
    fontSize: 20,
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  rightIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
export default Header;
