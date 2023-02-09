import React, {useContext} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonWithIcon} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  fontFamily,
  routes,
} from '../../../services';
import {TextInput} from 'react-native-gesture-handler';

export default function InviteFriend({navigation}) {
  const theme = useContext(themeContext);

  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.background == '#FFFFFF' ? 'black' : 'white'},
        ]}>
        <View style={styles.headerTitleAndIconView}>
          <Ionicons
            onPress={() => navigation.navigate(routes.dashboard)}
            style={{flex: 1.2}}
            color={theme.background == '#FFFFFF' ? 'white' : 'black'}
            name={'chevron-back'}
            size={26}
          />
          <Text
            style={[
              styles.textOne,
              {color: theme.background == '#FFFFFF' ? 'white' : 'black'},
            ]}>
            Invite Friends
          </Text>
        </View>
        <View style={styles.headerinnerSection}>
          <Image source={appImages.price} />
          <Text
            style={[
              styles.textTwo,
              {color: theme.background == '#FFFFFF' ? 'white' : 'black'},
            ]}>
            Invite Friends {'\n'} Get 3 Coupons each!
          </Text>
          <Text
            style={[
              styles.textThree,
              {color: theme.background == '#FFFFFF' ? 'white' : 'black'},
            ]}>
            When your friend sign up wwith your {'\n'}referral code, you'll both
            get 3.0 coupons
          </Text>
        </View>
      </View>
      <View style={[styles.secondSection, {backgroundColor: theme.background}]}>
        <Text
          style={[
            styles.textThree,
            {textAlign: 'left', fontFamily: fontFamily.appTextBold, color:theme.color},
          ]}>
          Share your invite Code
        </Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputFeild} />
          <View style={styles.imageView}>
            <Image source={appIcons.upload} />
          </View>
        </View>
        <ButtonWithIcon onPress={() => {}} color={colors.white} buttonTitle={'Invite'} />
      </View>
    </KeyboardAwareScrollView>
  );
}
