import {View, Text, Image, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../../services/config/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fontFamily} from '../../services';

export default function SettingBar({title, toggleNeed, onPress}) {
  const theme = useContext(themeContext);
  const [isON, setisON] = useState(false);

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: theme.background,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          borderBottomWidth: 0.5,
          marginVertical:5,
          borderBottomColor: colors.grey,
          height: 40,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: fontFamily.appTextSemiBold,
              color: theme.color,
              fontSize: 15,
            }}>
            {title}
          </Text>
        </View>
        {toggleNeed == true ? (
          <ToggleSwitch
            isOn={isON}
            onColor={colors.theme}
            offColor={colors.lightgrey}
            labelStyle={{display: 'none'}}
            size="small"
            onToggle={isOn => setisON(isOn)}
          />
        ) : (
          <Ionicons name={'chevron-forward'} />
        )}
      </View>
    </Pressable>
  );
}
