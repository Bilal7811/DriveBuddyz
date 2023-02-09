import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  PixelRatio,
  StyleSheet,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {appIcons, colors, fontFamily} from '../../services/utilities';
import Ionicons from 'react-native-vector-icons/Ionicons';
import themeContext from '../../services/config/themeContext';

export default function UserUsage({
  textHeading,
  text,
  onPress,
  source,
  selected,
  icon,
  name,
}) {
  const theme = useContext(themeContext);
  const size = 20;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          borderColor: selected ? colors.theme : 'white',
          borderWidth: 1,
        },
      ]}>
      <View style={styles.mainSec}>
        <View style={{flex: 0.7}}>
          <Image
            style={{
              height: PixelRatio.getPixelSizeForLayoutSize(size),
              width: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
            source={source}
          />
        </View>
        <View style={styles.innerSec}>
          <Text style={[styles.textOne, {color: theme.color}]}>
            {textHeading}
          </Text>
          <Text style={[styles.texttwo]}>{text}</Text>
        </View>
        <View style={styles.iconView}>
          {icon == true &&
            (selected ? (
              <Ionicons
                color={colors.theme}
                size={20}
                name={name}
              />
            ) : (
              <View></View>
            ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  mainSec: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
  },
  imagesView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSec: {
    flex: 2,
    justifyContent: 'center',
  },
  iconView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textOne: {
    color: 'black',
    fontWeight: '500',
    fontFamily: fontFamily.appTextBold,
    fontSize: 16,
  },
  texttwo: {
    color: '#C8C7CC',
    fontSize: 14,
  },
});
